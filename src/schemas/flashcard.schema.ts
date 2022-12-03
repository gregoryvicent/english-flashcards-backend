import Joi from 'joi';

const englishWordSchema = Joi.string()
  .min(1)
  .max(20)
  .trim()
  .pattern(/^[A-Z]+$/i)
  .required();

const spanishWordSchema = Joi.string()
  .min(1)
  .max(20)
  .trim()
  .pattern(/^[A-Z]+$/i)
  .required();

const idSchema = Joi.string()
  .trim()
  .guid({
    version: ['uuidv1', 'uuidv4'],
  })
  .required();

export { englishWordSchema, spanishWordSchema, idSchema };
