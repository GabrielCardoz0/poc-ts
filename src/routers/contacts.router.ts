import { Router } from "express";
import { createUser, deleteContact, getContacts, getTotalContacts, getUsers, insertNewContact, updateContact } from "../controllers/contact.controller.js";
import newUserSchemaValidation from "../middlewares/schemaValidation.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidation.middleware.js";

const contactsRouter = Router();



contactsRouter.post("/contacts/:id" , newUserSchemaValidation, insertNewContact);

contactsRouter.get("/contacts/:id" , getContacts );

contactsRouter.get("/totalcontacts/:id" , getTotalContacts);

contactsRouter.delete("/contacts/delete/:contactId" , deleteContact);

contactsRouter.put("/contacts/update/:contactId" , updateContact);


contactsRouter.post("/users" , userSchemaValidationMiddleware , createUser);

contactsRouter.get("/users" , getUsers);

export default contactsRouter;