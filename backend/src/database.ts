import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        /*
        host: "",
        user: "",
        password: "",
        database: ""
        */
    });
    return connection;
}
