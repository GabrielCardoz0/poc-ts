import { Contact } from "../protocols/contact.js";
// import { QueryResult } from "pg";
import prisma from "../database/db.js";


type NewUser = {
    username:string
}



export async function getContactsList(id :string) {
    try {
        // const contactsList = await dbconnection.query('SELECT * FROM contacts where "userId" = $1 order by id asc;' , [id]);
        const contactsList = await prisma.contacts.findMany({
            where:{
                userId:Number(id)
            }
        });

        return contactsList;

    } catch (error) {
      console.log(error);  
    };
};

export async function insertNewContactRepository(userId :number, contact :Contact) :Promise<boolean> {
    try {
        
        const {name , number , cep , logradouro , bairro , localidade , uf} = contact;

        const newContact = await prisma.contacts.create({
            data:{
                name:name,
                number:number,
                cep:cep.toString(),
                userId:Number(userId)
            }
        });

        const newContactId = await prisma.contacts.findFirst({
            where:{
                userId
            }
        });

        const newEnrollment = await prisma.enrollments.create({
            data:{
                logradouro:logradouro,
                bairro:bairro,
                localidade:localidade,
                uf:uf,
                contactId:newContactId.id
            }
        });

        return true;

    } catch (error) {
        console.log("erro lá ele:" , error);
        return false;
    };
};

export async function deleteContactRepository(id :number){
    try {

        const deleteContact = await prisma.contacts.delete({
            where:{
                id
            }
        });

        if(!deleteContact) return false;

        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    };
};

export async function updateContactRepository(contactId :number , contactInfo :Contact){
    try {

        console.log(contactId);
        
        
        const {name , number , cep , logradouro , bairro , localidade , uf} = contactInfo;

        const updateConfirmation = await prisma.contacts.update({
            data:{
                name:name,
                number:number,
                cep:cep.toString()
            },
            where:{
                id:contactId
            }
        })


        if( !updateConfirmation) return false;


        return true;
        
    } catch (error) {
        console.log(error);      
        return false;
    };
};

export async function createUserRepository(newUser :NewUser) {

    const createUser = await prisma.users.create({
        data:{
            username:newUser.toString()
        }
    });

    console.log(createUser);
    

    return createUser;
};

export async function getUsersRepository() {
    // const usersList = await dbconnection.query("SELECT * FROM users;");
    const usersList = await prisma.users.findMany();
    
    return usersList;
}