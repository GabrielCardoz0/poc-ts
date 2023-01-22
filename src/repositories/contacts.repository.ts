import dbconnection from "../database/db.js";
import { Contact } from "../protocols/contact.js";
import { QueryResult } from "pg";



export async function getContactsList() :Promise<QueryResult <Contact>>{
    try {
        const contactsList = await dbconnection.query("SELECT * FROM contacts ORDER BY id ASC;");

        return contactsList;

    } catch (error) {
      console.log(error);  
    };
};

export async function getTotalContactsList() :Promise<number>{
    
    const totalContacts = await dbconnection.query('SELECT COUNT(id) AS "total" FROM contacts;');
    return totalContacts.rows[0];
}


export async function insertNewContactRepository(contact:Contact){
    try {
        
        const {name , number , cep , logradouro , bairro , localidade , uf} = contact;

        const newContact : {rowCount:Number}= await dbconnection.query(`
        INSERT INTO contacts
            (name ,number, cep , logradouro , bairro , cidade , uf)
        VALUES
            ($1,$2,$3,$4,$5,$6,$7);
        ` , [name , number , cep , logradouro , bairro , localidade , uf]);

        if(newContact.rowCount === 0) return false;

        return true;

    } catch (error) {
        console.log(error);
        return false;
    };
};


export async function deleteContactRepository(id:(number|string)){
    try {
        const deleteConfirmation :{rowCount:number} = await dbconnection.query(`DELETE FROM contacts WHERE id = $1;` , [id]);

        if(deleteConfirmation.rowCount === 0) return false;

        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    };
};


export async function updateContactRepository(id:string , contactInfo:Contact){
    try {
        
        const {name , number , cep , logradouro , bairro , localidade , uf} = contactInfo;

        const updateConfirmation :{rowCount:number} = await dbconnection.query(`
        UPDATE
            contacts
        SET
            (name ,number, cep , logradouro , bairro , cidade , uf) = ($1,$2,$3,$4,$5,$6,$7)
        WHERE
            id = $8;`
            ,
        [name , number , cep , logradouro , bairro , localidade , uf, id]);

        if(updateConfirmation.rowCount === 0) return false;

        return true;
        
    } catch (error) {
        console.log(error);      
        return false;
    };
};