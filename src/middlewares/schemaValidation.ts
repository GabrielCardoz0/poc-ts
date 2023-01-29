import Joi from "joi";
import { NextFunction, Request , Response } from "express";

const userSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.number().required(),
  cep: Joi.string().required()
});

export default async function newUserSchemaValidation(req:Request , res:Response , next :NextFunction) {

  const validation = userSchema.validate(req.body , {abortEarly : false});

  if(validation.error){
    const errorsList = validation.error.details.map(d => d.message);
    return res.status(401).send(errorsList);
  };

  next();
};