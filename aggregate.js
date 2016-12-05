/**
        Find average price for all documents that meet a certain criteria
            1) Calculate average price for all docs in prices collection
                +Uses aggregate()
                    -Takes an array of objects as first argument
                        +Each object represents a pipeline stage
                            -$match: similar to query object
                            -$group: allows operations to be run on certain properties
                                +Total is a property that will be assigned aggregation output
                                +Object bound to $group property shows what fields you want to show  
                                +Only need to sum the prices
            2) Only done for docs where size is equal to first command-line arg
            3) Print the average price rounded to 2 decimal places
**/

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
const userSize = parseInt(process.argv[2])



mongo.connect(url, (err, db) => {
    if (err) throw err
    //Find collection
    const collection = db.collection('prices')
    
    //Counting number of documents meeting a certain criteria
    collection.aggregate([
        { $match: {size: userSize} },
        {$group: { _id: "$_id", total: {$sum: '$prices'} }}
    ])
        .toArray((err, arr) => {
            if (err) throw err
            //Access value assigned to total property and round to 2 decimal places
            const roundedResult = Number(arr[0].total).toFixed(2)
            console.log(roundedResult)
        })
})