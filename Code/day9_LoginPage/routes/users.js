import express from 'express';
import { validation } from '../controllers/index.js';

const usersRouter = express.Router();
usersRouter.post('/', validation);

export default usersRouter;


