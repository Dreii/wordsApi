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
                //Check if the value input is a string or number...
                if(isNaN(req.params.val)){
                    //THE VALUE IS A STRING
                    
                    //If the value is a string make sure its only one character
                    //as we are looking for one letter.
                    //also make it uppercase as the names of arrays are uppercase
                    //in the document.
                    var lett = req.params.val.toUpperCase().substring(0,1);
                    
                    console.log('Request for random word starting with '+lett+'...');
                    //get the number of entries in the specified array.
                    var arrayLength = doc[lett].length;
                    //return a random word from the specified letter array.
                    var result = doc[lett][helpers.random(arrayLength)];

                    //send the result
                    res.json(result);
                }
                else{
                    //THE VALUE IS A NUMBER
                    
                    //If the value is a number we are looking for a number of random words
                    //with any starting letter
                    var num = req.params.val;

                    console.log('Request for '+num+' random words...');
                    
                    //cycle through a for loop the requested number of times,
                    //getting a random letter, finding a random entry in the
                    //array for that letter, and adding it to a result array.
                    var lett, arrayLength, result = [];
                    for(i=0;i<num;i++){
                        lett = helpers.choose("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
                        arrayLength = doc[lett].length;

                        result.push(doc[lett][helpers.random(arrayLength)]);
                    }
                    
                    //send the result array.
                    res.json(result);
                }
            }
        }
    );
}