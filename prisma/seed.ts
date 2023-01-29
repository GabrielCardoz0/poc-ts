import prisma from "../src/database/db.js";

async function main() {
    await prisma.users.createMany({
        data:[
            {username:"gabriel"} , {username:"rhuan"} , {username:"gigi"}
        ]
    })
}

main()
.then(() => console.log("registro feito com sucesso"))
.catch((e => {
    console.error(e);
    process.exit(1);
}))
.finally(async () =>{
    await prisma.$disconnect();
});