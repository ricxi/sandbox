import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';

// load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // include to parse request body

// another method for managing routes
routes(app);

// a simple get request
app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'api is running' });
});

// basic handler/controller pattern
const itemController = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    itemId: req.params.itemId,
    userId: req.params.userId,
  });
};
app.get('/api/items/:itemId/:userId', itemController);

// Mulitple route handlers in an array
// notice that route handlers are just a form of middleware
const firstRouteHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log(`First route handler can get URL PARAMETERS: ${req.params.p}`);
  next();
};

const middleRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(
    `Middle route handler can also get URL PARAMETERS: ${req.params.p}`
  );
  next();
};

const lastRouteHandler = (req: Request, res: Response) => {
  console.log(
    `Last route handler can also get URL PARAMETERS: ${req.params.p}`
  );

  res.status(200).json({ 'multiple route handlers': 'yes' });

  // don't need to call next for the last route handler?
};

// You can place all the route handlers in an array
app.get('/api/multi/:p', [
  firstRouteHandler,
  middleRouteHandler,
  lastRouteHandler,
]);

// use a closure to add features to middleware
type Employee = {
  id: string;
  name: string;
};

type MiddlewareProp = {
  employees: Employee[];
};

const employees: Employee[] = [
  { id: '1', name: 'Pam' },
  { id: '2', name: 'Jim' },
];

const middleware =
  ({ employees }: MiddlewareProp) =>
  (req: Request, res: Response, next: NextFunction) => {
    const employee = employees.filter(
      (employee) => employee.id === req.params.id
    );

    res.locals.payload =
      employee.length === 0 ? { message: 'employee not found' } : employee;

    next();
  };

app.get(
  '/api/employees/:id',
  middleware({ employees }),
  (req: Request, res: Response) => {
    const payload = res.locals.payload;

    console.log(payload);

    res.status(200).json(payload);
  }
);

// You can use generics with Response and Request
type Params = {
  id: string;
};

type ReqBody = {
  name: string;
};

app.post(
  '/api/generics/:id',
  (req: Request<Params, {}, ReqBody, {}>, res: Response) => {
    const id = req.params.id;
    const name = req.body.name;
    res.status(200).json({ id, name });
  }
);

const PORT = process.env.PORT || '9000';
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
