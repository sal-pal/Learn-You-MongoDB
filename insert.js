/**
        Insert a document into a collection
**/

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
const firstName = process.argv[2]
const lastName = process.argv[3]
const object = {firstName: firstName, lastName: lastName}
const jsonDoc = JSON.stringify(object)



mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    var collection = db.collection('docs')
    
    //Insert new document into collection
    collection.insert(object)
    
    //Print object and close database
    console.log(jsonDoc)
    db.close()
})