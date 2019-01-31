import mongoose, { Schema } from 'mongoose';
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
const BancoSchema = new Schema(
  {
    _id: {
      $oid: {
        type: 'ObjectId'
      }
    },
    Denominacao_da_Instituicao: {
      type: 'String'
    },
    Tipo_de_Establecimento: {
      type: 'String'
    },
    Cod_AF: {
      type: 'Number'
    },
    Denominacao_do_Establecimento: {
      type: 'String'
    },
    Pais_de_Estabelecimento: {
      type: 'String'
    },
    Cod_Agencia: {
      type: 'Number'
    },
    Denominacao_da_Agencia: {
      type: 'String'
    },
    Sucursal: {
      Balcao_sede: {
        type: 'String'
      }
    },
    Morada: {
      type: 'String'
    },
    Localidade: {
      type: 'String'
    },
    Cod_Postal: {
      type: 'String'
    },
    Concelho: {
      type: 'String'
    },
    Distrito: {
      type: 'String'
    },
    Pais: {
      type: 'String'
    }
  }

  );

export default mongoose.model('Banco', BancoSchema);
