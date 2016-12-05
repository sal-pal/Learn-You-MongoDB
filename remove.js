/**
        Remove a document
**/

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'



mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    var collection = db.collection(process.argv[3])
    
    //Remove document
    collection.remove({_id: process.argv[4]})
    
    db.close()
})