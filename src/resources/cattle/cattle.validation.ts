import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().required(),
});

const get = Joi.object({
    name: Joi.string().required(),
});

export default { create };
