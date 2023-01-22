import Joi from "joi";
import { Contact } from "../protocols/contact";

const userSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.number().required(),
  cep: Joi.string().required()
});

export default async function newUserSchemaValidation(user :Contact) {
  const validation = userSchema.validate(user , {abortEarly : false});

  if(validation.error){
    const errorsList = validation.error.details.map(d => d.message);
    return false;
  };

  return true;
};