import {
  deleteContactRepository,
  getContactsList,
  insertNewContactRepository,
  updateContactRepository,
  createUserRepository,
  getUsersRepository
} from "../repositories/contacts.repository.js";

import { Request, Response } from "express";
import axios from "../../node_modules/axios/index.js";
import { Contact } from "../protocols/contact.js";

type ComplementInfo = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};



async function getContacts(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const contactsList = await getContactsList(id);

    if (contactsList.length < 0) return res.sendStatus(404);

    return res.status(200).send(contactsList);

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

async function getTotalContacts(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const contactsList = await getContactsList(id);

    return res.status(200).send({total:contactsList.length});

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  };
};

async function insertNewContact(req: Request, res: Response) {
  try {
    let newContact = req.body as Contact;

    const { id } = req.params;

    await axios
      .get(`https://viacep.com.br/ws/${newContact.cep}/json/`)
      .then((resp) => {
        const complementos = resp.data as ComplementInfo;

        newContact = {
          name: newContact.name,
          number:newContact.number,
          cep: newContact.cep,
          logradouro: complementos.logradouro,
          bairro: complementos.bairro,
          localidade: complementos.localidade,
          uf: complementos.uf,
        };
      })
      .catch((err) => {
        console.log('axios deu pau:' ,err.response.data);
        return res.sendStatus(500);
      });

    const insertVerify :boolean = await insertNewContactRepository(Number(id) , newContact);

    if(!insertVerify) return res.sendStatus(400);

    res.sendStatus(201);
  } catch (error) {
    console.log("deu erro aqui", error);
    res.sendStatus(500);
  }
};

async function deleteContact(req: Request, res: Response) {
  try {
    
    const { contactId } = req.params;

    const deleteVerify :boolean = await deleteContactRepository(Number(contactId));

    if (!deleteVerify) return res.sendStatus(400);

    return res.sendStatus(202);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

async function updateContact(req: Request, res: Response) {
  try {
    const { contactId } = req.params;

    let newContactInfo :Contact = req.body;

    await axios
      .get(`https://viacep.com.br/ws/${newContactInfo.cep}/json/`)
      .then((resp) => {

        const complementos = resp.data as ComplementInfo;
        
        newContactInfo = {
          name: newContactInfo.name,
          number:newContactInfo.number,
          cep: newContactInfo.cep,
          logradouro: complementos.logradouro,
          bairro: complementos.bairro,
          localidade: complementos.localidade,
          uf: complementos.uf,
        };
        
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    const updateVerify = await updateContactRepository(Number(contactId), newContactInfo);

    if (!updateVerify) return res.sendStatus(400);

    res.status(200).send(newContactInfo);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

async function createUser(req :Request , res :Response) {
  try {
    const { username } = req.body
    const user = await createUserRepository(username);

    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  };
};

async function getUsers(req :Request , res :Response) {
  try {
    const usersList = await getUsersRepository();

    res.status(200).send(usersList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  };
};

export { insertNewContact, getContacts, getTotalContacts, deleteContact, updateContact ,createUser ,getUsers };

