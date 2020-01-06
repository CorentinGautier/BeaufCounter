export function initConnexion() {

    const { Pool } = require("pg");
    const pool = new Pool({
        user: "cwyzkyzy",
        host: "	rogue.db.elephantsql.com",
        database: "BeaufCounterBDD",
        password: "YpBy6L_7iF54J6pHknrlqnKDsy_btl6n",
        port: 5432
    });
    console.log("Connexion réussie à la base de données");

}