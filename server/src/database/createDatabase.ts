const databaseTables = {
    users: "CREATE TABLE IF NOT EXISTS users(id INT NOT NULL AUTO_INCREMENT,email VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, PRIMARY KEY (id))",
}

export = (db: any) => {
    return new Promise(async function (resolve, reject) {
        try {
            for (const [key, value] of Object.entries(databaseTables)){
                await db.query(value);
                console.log(key + " table was created if did not exists");
            }
            resolve(true);
        }
        catch (err) {
            console.log(err)
        }
    })
}