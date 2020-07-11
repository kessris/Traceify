const MongoClient = require("mongodb").MongoClient;
require('dotenv').config({ path: './.env' });

const URI = process.env.DB_CONNECTION;
let db;

function connect(callback){
    console.log("URI: "+URI);
    MongoClient.connect(URI, (err, database) => {
        if (err) return console.error(err);
        db = database.db('traceify');
        console.log('Connected to Database');
        callback();
    });
}

function get(){
    return db;
}

function close(){
    db.close();
}

module.exports = {
    connect,
    get,
    close
};