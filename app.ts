import * as Koa from 'koa';
import Pug from 'koa-pug';
import * as path from 'path';
import dashboardRouter from './routes/dashboard';
import dependenciesRouter from './routes/dependencies';
import * as serve from 'koa-static';

const app = new Koa();

app.use(serve('./public'));

new Pug({
  viewPath: path.resolve(__dirname, '../views'),
  basedir: path.resolve(__dirname, '../views'),
  app: app,
});

app.use(dashboardRouter.routes()).use(dashboardRouter.allowedMethods());
app.use(dependenciesRouter.routes()).use(dependenciesRouter.allowedMethods());

console.log('listening on 3000');
app.listen(3000);
