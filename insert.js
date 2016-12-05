/**
        Insert a document into a collection
            Reqs
                1) Insert into docs collection
                2) Document must be JSON document with following properties:
                    a) firstName
                        -First command-line arg
                    b) lastName
                        -Second command-line arg
                3) Print the object used to create the document
                    -So what is this object? The string or the JSON object?
                        +Use string
                        
            Goal: Find out what is assigned to data parameter in insert callback. Do this to find out if object variable even needed
            
            -Problem
                +Test begining of algorithm
**/

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
const firstName = process.argv[2]
const lastName = process.argv[3]
const object = {firstName, lastName}
const jsonDoc = JSON.stringify(object)



mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    var collection = db.collection('docs')
    
    //Insert new document into collection
    collection.insert(jsonDoc)
    
    console.log(jsonDoc)
})