import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Just another API!');
});

app.listen(constants.PORT, err => {
    if (err){
        throw err;
    } else {
      console.log(`
      Server running on port : ${constants.PORT}
      ---------------------------------
      Runnning on ${process.env.NODE_ENV}
      ---------------------------------
      MCM 2018/19 - Sistemas Distribuidos
      `)
    }
})
