"use strict"

import path = require('path');
import fs = require('fs');
import http = require('http');
import https = require('https');
import * as express from 'express';
import bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
import yaml = require('js-yaml');
import helmet = require('helmet');
import cors = require('cors');
import mustacheExpress = require("mustache-express");
import sassMiddleware = require('node-sass-middleware');
import { Connection, createConnection} from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import config = require('./config.js');
import { AppRoutes } from "./server/routes";
import { recFindByExt } from "./util";

//entities
import { AppUser } from "./server/db/entity/user"
import { Industry } from "./server/db/entity/industry"
import { Currency } from "./server/db/entity/currency"
import { Country } from "./server/db/entity/country"
import { TimeZone } from "./server/db/entity/timezone"
import { Account } from "./server/db/entity/account"
import { CompanyType } from "./server/db/entity/company_type"
import { Address } from "./server/db/entity/address"
import { Tax } from "./server/db/entity/tax"
import { Vendor } from "./server/db/entity/vendor"

//REST API
import registerRESTRoutes = require('./server/api/index');

const viewsPath: string = '/home/gux/projects/organic-world/server/views';
const scssPath: string = '/home/gux/projects/organic-world/server';

class App {
    private httpServer;
    private httpsServer;
    public express: express.Application;
    public router: express.Router;
    public db: Connection;

    constructor(host: string, httpPort: string, httpsPort: string) {
      this.express = express();
      this.router = express.Router();
      let key = fs.readFileSync('/home/gux/localhost.key');
      let cert = fs.readFileSync('/home/gux/localhost.cert');

      let httpsOptions = {
        key: key,
        cert: cert,
        requestCert: false,
        rejectUnauthorized: false
      };

      // Starting both http & https servers
      this.httpServer = http.createServer(this.express);
      this.httpsServer = https.createServer(httpsOptions, this.express);
    
      https.createServer(httpsOptions, express());
      this.initMiddleware();

      this.httpServer.listen(httpPort, host ,async () => {
          console.log(`Server listening on ${host}:${httpPort}`);
      });
      this.httpsServer.listen(httpsPort, host ,async () => {
        console.log(`Server listening on ${host}:${httpsPort}`);
      });
    }

    private initMiddleware(): void {
        this.express.engine('mustache', mustacheExpress(viewsPath + '/partials', '.mst'));
        this.express.set('view engine', 'mustache');
        this.express.set('views', viewsPath);
        this.express.use(cookieParser());
        this.express.use(sassMiddleware({
            src: path.join('scss'),
            dest: path.join('public'),
            debug: true,
            indentedSyntax : false,
            outputStyle: 'compressed'
          }));
        this.express.use(express.static(path.join('public')));
        this.express.use(helmet());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({     // to support URL-encoded bodies
          extended: true
        }));
        //TODO this in production
        this.express.disable('view cache');
        this.express.use(cors());
    }

    async initDB() {
      const l = recFindByExt(`${process.cwd()}/server/`,'yaml');
      if(l.length == 0) return;   
      let doc = yaml.safeLoad(fs.readFileSync(l[0], 'utf8'));
      
        this.db = await createConnection({
            type: "postgres",
            host: doc.db.host,
            port: doc.db.port,
            username: doc.db.user,
            password: doc.db.password,
            database: doc.db.database,
            entities: [
              AppUser, Industry, Currency, Country, TimeZone, Account, CompanyType, Address, Tax, Vendor
            ],
            namingStrategy: new SnakeNamingStrategy()
        });
    }

    // register all application routes
    registerRoutes(appRoutes) {
      this.express.use('/', this.router);
      appRoutes.forEach(route => {
        this.router[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response, next)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    }
}


//entry point
let app: App;
(async function() {
  app = new App(config.default.host, config.default.portHTTP ,config.default.portHTTPS);
  await app.initDB();
  app.registerRoutes(AppRoutes);
  registerRESTRoutes();
})();

export { app };
export default App;

