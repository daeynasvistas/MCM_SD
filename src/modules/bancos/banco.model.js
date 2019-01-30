import mongoose, { Schema } from 'mongoose';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';

/*
{
    "Denominacao_da_Instituicao": "321 CRÉDITO - INSTITUIÇÃO FINANCEIRA DE CRÉDITO, SA",
    "Tipo_de_Establecimento": "Rede",
    "Cod_AF": 305,
    "Denominacao_do_Establecimento": "321 CRÉDITO - INSTITUIÇÃO FINANCEIRA DE CRÉDITO, SA",
    "Pais_de_Estabelecimento": "Portugal",
    "Cod_Agencia": 0,
    "Denominacao_da_Agencia": "SEDE - LISBOA",
    "Sucursal": {
      "Balcao_sede": "Sim"
    },
    "Morada": "AVENIDA DUQUE D'ÁVILA, N.º 46, 7º B",
    "Localidade": "LISBOA",
    "Cod_Postal": "1050-083 LISBOA",
    "Concelho": "Lisboa",
    "Distrito": "Lisboa",
    "Pais": "Portugal",
    "id": 1
  }
*/
const BancoSchema = new Schema({
  Denominacao_da_Instituicao: {
  type: String,
  trim: true,
  required: true
},
  Tipo_de_Establecimento: {
  type: String,
  trim: true,
},
  Cod_AF: {
  type: Number,
  trim: true
},
  //user: {
  //  type: Schema.Types.ObjectId,
  //  ref: 'User',
  //},
  Denominacao_do_Establecimento: {
  type: String,
  trim: true,
  required: true
},
  Pais_de_Estabelecimento: {
  type: String,
  trim: true,
},
  Cod_Agencia: {
  type: Number,
  default:0
},
  Denominacao_da_Agencia: {
  type: String,
  trim: true,
},
  Morada: {
  type: String,
  trim: true,
},
  Localidade: {
  type: String,
  trim: true,
},
  Cod_Postal: {
  type: String,
  trim: true,
},
  Concelho: {
  type: String,
  trim: true,
},
  Distrito: {
  type: String,
  trim: true,
},
  Pais: {
  type: String,
  trim: true,
},

}, { timestamps: true });




BancoSchema.statics = {
  createBanco(args, user) {
    return this.create({
      ...args,
      user,
    });
  },
};

export default mongoose.model('Banco', BancoSchema);
