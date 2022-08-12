const Koa = require("koa");

const json = require('koa-json')

const routes = require('./routes/routes.js')

const app = new Koa();

app.use(json());

app.use(routes.routes()).use(routes.allowedMethods());
app.listen(3000);