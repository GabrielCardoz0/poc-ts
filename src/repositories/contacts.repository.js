import dbconnection from "../database/db.js";

export async function getContactsList(){
    try {
        const contactsList = await dbconnection.query("SELECT * FROM contacts;");

        return contactsList.rows;

    } catch (error) {
      console.log(error);  
    };
};


export async function insertNewContactRepository(contact){
    try {
        const {name , number , cep , logradouro , bairro , localidade , uf} = contact;

        const newContact = await dbconnection.query(`
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


export async function deleteContactRepository(id){
    try {
        const deleteConfirmation = await dbconnection.query(`DELETE FROM contacts WHERE id = $1;` , [id]);

        if(deleteConfirmation.rowCount === 0) return false;

        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    };
};


export async function updateContactRepository(id , contactInfo){
    try {
        const {name , number , cep , logradouro , bairro , localidade , uf} = contactInfo;

        const updateConfirmation = await dbconnection.query(`UPDATE contacts SET (name ,number, cep , logradouro , bairro , cidade , uf) = ($1,$2,$3,$4,$5,$6,$7) WHERE id = $8;` , [name , number , cep , logradouro , bairro , localidade , uf,id]);

        if(updateConfirmation.rowCount === 0) return false;

        return true;
        
    } catch (error) {
        console.log(error);      
        return false;
    };
};