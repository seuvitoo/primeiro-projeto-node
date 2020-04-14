import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Helo GoStack' }));
export default routes;
