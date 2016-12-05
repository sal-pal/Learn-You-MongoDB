/**
        Find average price for all documents that meet a certain criteria
**/

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
const userSize = process.argv[2]


mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    const collection = db.collection('prices')
    
    //For all documents with a size field of a certain value, find the average of those documents' price field
    collection.aggregate([
        { $match: {size: userSize} },
        {$group: { _id: "total", total: {$avg: '$price'} }}
    ])
        .toArray((err, arr) => {
            if (err) throw err
            //Access value assigned to total property and round to 2 decimal places
            const roundedResult = Number(arr[0].total).toFixed(2)
            console.log(roundedResult)
            db.close()
        })
})