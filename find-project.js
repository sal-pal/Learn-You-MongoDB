/**
        Performs a projection to return only certain fields from the selected documents
**/

var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var userAge = parseInt(process.argv[2])
var query = {'age': {$gt:userAge}}
var projection = {name: 1, age: 2, _id: 0}



mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    var collection = db.collection('parrots')
    
    //Find documents in collection and print them
    collection.find(query, projection)
        .toArray((err, docs) => {
            if (err) throw err
            console.log(docs)
            db.close()
        })    
})