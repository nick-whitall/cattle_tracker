import Joi from 'joi';
import { AnimalTypes } from './livestock.model';

const locations = Joi.object({
    locationRef: Joi.string().required(),
    comment: Joi.string().optional(),
    isActive: Joi.boolean().required(),
    startDateTime: Joi.string().optional(),
    endDateTime: Joi.string().optional(),
    tags: Joi.array().items(Joi.string()).optional()
});
const animals = Joi.object({
    animalRef: Joi.string().required(),
    comment: Joi.string().optional(),
    isActive: Joi.boolean().required(),
    startDateTime: Joi.string().optional(),
    endDateTime: Joi.string().optional(),
    tags: Joi.array().items(Joi.string()).optional()
});
const groupings = Joi.object({
    groupRef: Joi.string().required(),
    description: Joi.string().optional(),
    animals: Joi.array().items(animals),
    locations: Joi.array().items(locations),
    tags: Joi.array().items(Joi.string()).optional()
});
const create = Joi.object({
    type: Joi.string().valid(...AnimalTypes).required(),
    breed: Joi.string().optional(),
    description: Joi.string().optional(),
    groupings: Joi.array().items(groupings),
});

export default { create };
