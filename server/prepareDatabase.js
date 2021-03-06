import sqlite3 from 'sqlite3';

const prepareDatabase = async () => {
    const pathToDatabase = './database.db';
    let database = new sqlite3.Database(pathToDatabase, (err) => {
        if (err) {
            return console.error(err);
        }
    })

    database.run('CREATE TABLE IF NOT EXISTS users(firstName TEXT, lastName TEXT, email TEXT, date DATE);')
    return database;
}

export default prepareDatabase;