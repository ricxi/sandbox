import { Express } from 'express';
import { getUser } from './controllers/users.controller';

// in the main 'index.ts' file, pass in 'app'
// like this routes(app)
const routes = (app: Express) => {
  app.get('/api/users/:userId', getUser);
};

export default routes;
