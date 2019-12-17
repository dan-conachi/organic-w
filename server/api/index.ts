import { app } from '../../server';

import { checkJwt } from '../middleware/check_jwt';

import { IndustryCtrl } from '../ctrl/industry';
import { CurrencyCtrl } from '../ctrl/currency';
import { CountryCtrl } from '../ctrl/country';
import { TimeZoneCtrl } from '../ctrl/timezone';
import { UserCtrl } from '../ctrl/user';
import { AccountCtrl } from '../ctrl/account';
import { CompanyTypeCtrl } from '../ctrl/company_type';
import { TaxCtrl } from '../ctrl/tax';
import { VendorCtrl } from '../ctrl/vendor';

function registerRESTRoutes() {
    //special call with init app data
    app.router.get('/api/init', checkJwt, async (req, res) => {
        return res.send(await new UserCtrl(req, res).init());
    });

    app.router.get('/api/industry', checkJwt, async (req, res) => {
        return res.send(await new IndustryCtrl(req, res).getAll());
    });
    app.router.get('/api/currency', checkJwt, async (req, res) => {
        return res.send(await new CurrencyCtrl(req, res).getAll());
    });
    app.router.get('/api/country', checkJwt, async (req, res) => {
        return res.send(await new CountryCtrl(req, res).getAll());
    });
    app.router.get('/api/timezone', checkJwt, async (req, res) => {
        return res.send(await new TimeZoneCtrl(req, res).getAll());
    });
    app.router.get('/api/company-type', checkJwt, async (req, res) => {
        return res.send(await new CompanyTypeCtrl(req, res).getAll());
    });

    //settings
    app.router.get('/api/account', checkJwt, async (req, res) => {
        return res.send(await new AccountCtrl(req, res).get());
    });
    app.router.post('/api/account', checkJwt, async (req, res) => {
        return res.send(await new AccountCtrl(req, res).save());
    });
    app.router.get('/api/misc', checkJwt, async (req, res) => {
        return res.send(await new AccountCtrl(req, res).get());
    });
    app.router.post('/api/misc', checkJwt, async (req, res) => {
        return res.send(await new AccountCtrl(req, res).saveMisc());
    });

    //tax
    app.router.get('/api/tax', checkJwt, async (req, res) => {
        return res.send(await new TaxCtrl(req, res).getAll());
    });
    app.router.get('/api/tax/user', checkJwt, async (req, res) => {
        return res.send(await new TaxCtrl(req, res).getAllByUser());
    });
    app.router.post('/api/tax/user', checkJwt, async (req, res) => {
        return res.send(await new TaxCtrl(req, res).saveByUser());
    });
    app.router.delete('/api/tax/:id', checkJwt, async (req, res) => {
        return res.send(await new TaxCtrl(req, res).deleteByID(parseInt(req.params.id)));
    });

    //vendor
    app.router.post('/api/vendor/', checkJwt, async (req, res) => {
        return res.send(await new VendorCtrl(req, res).saveByUser());
    });
    app.router.get('/api/vendor/account', checkJwt, async (req, res) => {
        return res.send(await new VendorCtrl(req, res).getAllByUser());
    });
}

export = registerRESTRoutes;


