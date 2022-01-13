const databaseTables = {
    // key name is same like table name. it will be delete and recreate
    users: "CREATE TABLE IF NOT EXISTS users(id INT NOT NULL AUTO_INCREMENT,email VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, activated BOOLEAN DEFAULT 0,  ref_id VARCHAR(100) NOT NULL, PRIMARY KEY (id))",
    user_token: "CREATE TABLE IF NOT EXISTS user_token (id INT NOT NULL AUTO_INCREMENT, user_id INT(11) NOT NULL,token VARCHAR(100) NOT NULL,expire VARCHAR(30) NOT NULL,PRIMARY KEY (id))",
}

export = (db: any) => {
    return new Promise(async function (resolve, reject) {
        try {
            // get key/value in object
            for (const [key, value] of Object.entries(databaseTables)){
                // delete table
                let dropTable = `DROP TABLE IF EXISTS ${key};`
                await db.query(dropTable);
                console.log(key + " table deleted if exists");
                // create table
                await db.query(value);
                console.log(key + " table created");
            }
            resolve(true);
        }
        catch (err) {
            console.log(err)
        }
    })
}