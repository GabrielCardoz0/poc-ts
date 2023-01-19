import { Router } from "express";
import { deleteContact, getContacts, insertNewContact, updateContact } from "../controllers/contact.controller.js";

const contactsRouter = Router();

contactsRouter.get("/contacts" , getContacts );

contactsRouter.post("/contacts" , insertNewContact);

contactsRouter.delete("/contacts/delete/:id" , deleteContact);

contactsRouter.put("/contacts/update/:id" , updateContact);

export default contactsRouter;