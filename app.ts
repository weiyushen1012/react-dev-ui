import * as Koa from 'koa';
import Pug from 'koa-pug';
import * as path from 'path';
import rootRouter from './routes';

const app = new Koa();

new Pug({
  viewPath: path.resolve(__dirname, '../views'),
  basedir: path.resolve(__dirname, '../views'),
  app: app,
});

app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

console.log('listening on 3000');
app.listen(3000);
