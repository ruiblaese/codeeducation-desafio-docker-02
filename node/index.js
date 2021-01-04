const { text } = require('express');
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

var sql = `` +
    `CREATE TABLE IF NOT EXISTS people(
	id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL	
);`
connection.query(sql)
sql = `INSERT INTO people(name) values('Rui')`
connection.query(sql)
connection.end()


app.get('/', (req, res) => {
    var textRes = '<h1>Full Cycle Rocks!</h1>'
    textRes += '</br>'
    textRes += '<h2>Lista de nomes cadastrados no banco de dados: </h2>'

    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    connection.query(sql)
    sql = `INSERT INTO people(name) values('Rui')`
    connection.query(sql)
    
    sql = `select name from people`
    connection.query(sql,function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));

        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            textRes += ' - ' + element.name + '<br>'            
            
        }
        res.send(textRes)  
    });    
    connection.end()   

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})