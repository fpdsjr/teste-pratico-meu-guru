import Joi from 'joi';

const joiUserSchema = Joi.object({
  nome: Joi.string().required().messages({
    'any.required': '400|o campo nome é obrigatório',
    'string.base': '422|nome precisa ser no formato string',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '400|o campo email é obrigatório',
    'string.email': '422|formato do campo email invalido',
    'string.base': '422|email precisa ser no formato string',
  }),
  senha: Joi.string().required().messages({
    'any.required': '400|o campo senha é obrigatório',
    'string.base': '422|senha precisa ser no formato string',
  }),
});

export { joiUserSchema };
