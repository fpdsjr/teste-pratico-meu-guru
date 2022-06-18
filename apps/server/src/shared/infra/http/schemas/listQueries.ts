import Joi from 'joi';

const joiListUserSchema = Joi.object({
  page: Joi.string().required().messages({
    'any.required': '400|o campo page é obrigatório',
  }),
  limit: Joi.string().required().messages({
    'any.required': '400|o campo limit é obrigatório',
  }),
  filter: Joi.string(),
  search: Joi.string(),
});

export { joiListUserSchema };
