/**
        Update a document
**/

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'



mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    var collection = db.collection('users')
    
    //Update document
    collection.update({
        name: 'Tina'        
    },
    {
        $set: {
            age: 40
        }
    })
    
    db.close()
})