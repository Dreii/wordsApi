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
                //store both parameters
                var val1 = req.params.val1;
                var val2 = req.params.val2;
                var lett, num;
                
                //Check if one of the values is a letter or string and,
                //one is a number, if so assign each to the corect value.
                //if not, return an error.
                if(!isNaN(parseInt(val1)) && isNaN(parseInt(val2))){
                    lett = val2;
                    num = val1;
                    console.log(1);
                }
                //val1 is a string and val2 is a number
                else if(isNaN(parseInt(val1)) && !isNaN(parseInt(val2))){
                    lett = val1;
                    num = val2;
                    console.log(2);
                }
                else{
                    console.log('Invalid request...');
                    res.json({"result": "error - one value must be a number and the other a letter!"});
                    return;
                }
                
                //if for some reason the letter input isnt just one character, make it one.
                lett = lett.substring(0,1).toUpperCase();
                
                console.log('Request for '+num+' random words starting with '+lett+'...');
                //get the amount of entries in the letter array asked for
                var arrayLength = doc[lett].length;
                var result = [];
                //cycle for the number of times asked for, adding a random word
                //to a result array each cycle...
                for(i=0;i<num;i++){
                    result.push(doc[lett][helpers.random(arrayLength)]);
                }
                
                //return the result array.
                res.json(result);
            }
        }
    );
}