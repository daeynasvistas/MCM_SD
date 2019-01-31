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

//routes.get('/:id', authJwt, bancoController.getBancoById);

routes.get('/about', authJwt, bancoController.getBancosListFilter);
routes.get('/', authJwt, bancoController.getBancosList);

export default routes;
