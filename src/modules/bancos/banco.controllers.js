import Banco from './banco.model';

export async function createBanco(req, res) {
  try {
    const banco = await Banco.createBanco(req.body, req.user._id);
    return res.status(201).json(banco);
  } catch (e) {
    return res.status(400).json(e);
  }
}
