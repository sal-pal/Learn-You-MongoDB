/**
        Performs a conditional query against a collection      
**/

var mongo = require('mongodb').MongoClient



var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    var collection = db.collection('parrots')
    
    //Find documents in collection and print them
    var userAge = parseInt(process.argv[2])
    collection.find({})
        .toArray((err, docs) => {
            if (err) throw err
            console.log(docs)
            db.close()
        })    

})