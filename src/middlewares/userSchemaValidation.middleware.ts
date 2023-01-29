import { NextFunction, Request , Response } from "express";
import Joi from "joi";

const newUserSchema = Joi.object({
    username:Joi.string().required()
});

export default function (req:Request , res:Response, next :NextFunction){
    const validate = newUserSchema.validate(req.body , {abortEarly:false});

    if(validate.error){
        const errorsList = validate.error.details.map(d => d.message);
        return res.status(401).send(errorsList);
    };

    next();
};