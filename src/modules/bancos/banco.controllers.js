import Banco from './banco.model';

import * as util from 'util' // has no default export
import { inspect } from 'util' // or directly

export async function createBanco(req, res) {
  try {
    const banco = await Banco.createBanco(req.body, req.user._id);
    return res.status(201).json(banco);
  } catch (e) {
    return res.status(400).json(e);
  }
}

export async function getBancoById(req, res) {
  try {
    const banco = await Banco.findById(req.params.id);
    console.log(req.params.id);
    return res.status(201).json(banco);
  } catch (e) {
    return res.status(400).json(e);
  }
}

// com limites
/*
export async function getBancosList(req, res) {
//  const limit = parseInt(req.query.limit, 0);
//  const skip = parseInt(req.query.skip, 0);
  try {
    const bancos = await Banco.list();
    return res.status(201).json(bancos);
  } catch (e) {
    return res.status(400).json(e);
  }
}
*/

// receber todos os bancos
export async function getBancosList(req, res) {
    try {
      const bancos = await Banco.find();
      return res.status(201).json(bancos);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

// com filtro query
  export async function getBancosListFilter(req, res) {
    console.log(req.query.Cod_AF);
    console.log(req.query.Cod_Agencia);

    try {
      var query =  Banco.find({"Cod_AF": req.query.Cod_AF,
                               "Cod_Agencia": req.query.Cod_Agencia});

      Banco
      .find(query)
      //.populate('user')  -- mais filtro
      .exec(function (err, banco) {
        // Catch        if (err) return handleError(err);
       // console.log('O Banco é %s', banco);
        return res.status(201).json(banco);
      });

    } catch (e) {
      return res.status(400).json(e);
    }
  }

