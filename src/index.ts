import "reflect-metadata"

import app from "./app"
import { AppDataSource } from "./db"


async function main (){
try {
    await AppDataSource.initialize()
    console.log('se conecto a la bd');
    app.listen(3333, ()=>{
        'se ejecuta en el puerto 3333'
    })
} catch (error) {
    console.log(error);
}
}

main();


