/**
        Update a document
            Reqs:
                1) Update a document in users collection
                2) Database name will be passed as first command-line arg
                3) Want to change Tina's age from 30 to 40
                    +update()
                        -First argument is query
                            +The conditional statement that filters the documents
                        -Second argument is an object of the properties to update
                            +IMPORTANT: Without using $set property, the document would be updated by the object passed as the second argument
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