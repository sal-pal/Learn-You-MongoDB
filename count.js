/**
        Count the number of documents that meet certain criteria
**/

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
const userAge = parseInt(process.argv[2])



mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    const collection = db.collection('parrots')
    
    //Counting number of documents meeting a certain criteria
    collection.count({'age': {$gt:userAge}})
        .then((num) => {
            console.log(num)
            db.close()
        })
})