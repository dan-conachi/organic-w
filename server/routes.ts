import { UserCtrl } from "./ctrl/user"

//jwt related things
import config from "../config";
import * as jwt from "jsonwebtoken";

export const AppRoutes = [
    {
        path: "/",
        method: "get",
        action: async (req, res) => {
            res.render('index', {});
        }
    },
    {
        path: "/login",
        method: "get",
        action: async (req, res) => {
            res.render('login', {});
          }
    },
    {
        path: "/login",
        method: "post",
        action: async (req, res) => {
            await new UserCtrl(req, res).login(req.body.u, req.body.p);
        }
    },
    {
        path: "/signin",
        method: "get",
        action: async (req, res) => {
            new UserCtrl(req, res).createUser(req.body.u, req.body.p);
        }
    },
    {
        path: "/app",
        method: "get",
        action: async (req, res) => {
            const token = <string>req.cookies['SESSIONID'];
            let jwtPayload;
            
            try {
                jwtPayload = jwt.verify(token, config.jwtSecrete);
                res.locals.jwtPayload = jwtPayload;
            } catch(e) {
                res.redirect(301, 'login');
                return;
            }

            const {userId, username} = jwtPayload;
            const newToken = jwt.sign({userId, username}, config.jwtSecrete, {
                expiresIn: '2h'
            });
            
            res.cookie('SESSIONID', newToken, {httpOnly: true, secure: true});
            res.render('app', {});
        }
    }
];