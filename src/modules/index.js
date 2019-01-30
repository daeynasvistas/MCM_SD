import userRoutes from './users/user.routes';
import bancoRoutes from './bancos/banco.routes';

export default app => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/bancos', bancoRoutes);
};
