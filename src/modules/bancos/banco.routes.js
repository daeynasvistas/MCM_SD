import { Router } from 'express';
import validate from 'express-validation';

import * as bancoController from './banco.controllers';
import { authJwt } from '../../services/auth.services';
import bancoValidation from './banco.validations';

const routes = new Router();

routes.post(
  '/',
  authJwt,
  validate(bancoValidation.createBanco),
  bancoController.createBanco,
);

export default routes;
