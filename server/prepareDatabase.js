import sqlite3 from 'sqlite3';

const prepareDatabase = () => {
    const pathToDatabase = './database.db';
    let database = new sqlite3.Database(pathToDatabase, (err) => {
        if(err) {
            return console.error(err);
        }
    })

    database.run('CREATE TABLE IF NOT EXISTS userEvents (firstName TEXT, lastName TEXT, email TEXT, eventDate DATE)')
}

export default prepareDatabase;