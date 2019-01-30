import Joi from 'joi';

export default {
  createBanco: {
    body: {
      Denominacao_da_Instituicao: Joi.string().min(3).required(),
      Denominacao_do_Establecimento: Joi.string().min(3).required(),
    },
  },
};
