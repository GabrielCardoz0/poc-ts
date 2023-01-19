import axios from "axios";
import { deleteContactRepository, getContactsList, insertNewContactRepository, updateContactRepository } from "../repositories/contacts.repository.js";

async function getContacts(req, res) {
  try {

    const contactsList = await getContactsList();

    if(contactsList.length === 0 ) return res.sendStatus(404);

    res.send(contactsList);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  };
};


async function insertNewContact(req, res) {
  try {
    let newContact = req.body;

    await axios.get(`https://viacep.com.br/ws/${newContact.cep}/json/`)
    .then( resp => {
        const {logradouro , bairro , localidade , uf} = resp.data;

        newContact = {...newContact , logradouro , bairro , localidade , uf};
    })
    .catch(err => {
        console.log(err.response.data);
    });

    const insertVerify = await insertNewContactRepository(newContact);

    if(!insertVerify) return res.sendStatus(400);

    res.sendStatus(201);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  };
};


async function deleteContact(req, res) {
  try {
    const {id} = req.params;

    const deleteVerify = await deleteContactRepository(id);

    if(!deleteVerify) return res.sendStatus(400);

    res.sendStatus(202);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  };
};


async function updateContact(req, res) {
  try {
    const {id} = req.params;

    let newContactInfo = req.body;

    await axios.get(`https://viacep.com.br/ws/${newContactInfo.cep}/json/`)
    .then( resp => {
        const {logradouro , bairro , localidade , uf} = resp.data;

        newContactInfo = {...newContactInfo , logradouro , bairro , localidade , uf};
    })
    .catch(err => {
        console.log(err.response.data);
    });

    const updateVerify = await updateContactRepository(id , newContactInfo);

    if(!updateVerify) return res.sendStatus(400);

    res.status(200).send(newContactInfo);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  };
};

export {insertNewContact , getContacts , deleteContact , updateContact}
