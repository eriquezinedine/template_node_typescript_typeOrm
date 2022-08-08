import {DataSource} from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "restaurante",
    entities: [ User ],
    logging: true,
    // synchronize: true, //! Puedo observar todo el codigo que se genera
})

//! Para desarrollo la entities es buena, pero para PRODUCCION

//! Se recomienda migrations