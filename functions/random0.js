//helper functions for basic/repeated tasks
var helpers = require('./helpers.js');

module.exports = function(db, req, res){
    //find the words list document in the database...
    db.wordList.findOne(
        {name: 'words'},
        function(err, doc){
            //On error, send the error
            if(err){
                res.send(err);
            //On Success...
            }else{
                console.log('Request for random word...');
                //randomly choose a letter...
                var lett = helpers.choose("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
                //find the database array for that letter and get the number of entries...
                var arrayLength = doc[lett].length;
                //choose a random index from 0 to the highest index,
                //and return the entry from that index.
                var result = doc[lett][helpers.random(arrayLength)];

                //respond with the result.
               res.json(result);
            }
        }
    );
}