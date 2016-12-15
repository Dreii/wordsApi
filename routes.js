module.exports = function(app, db){
    
    //API MAIN DIRECTORY - returns help information for users to understand how to use.
    app.get('/', function(req, res){
        res.send('It Works!');
    });
    
    //LIST - returns all words of a certain letter.
    app.get('/list/:letter', function(req,res){
        require('./functions/list.js')(db, req, res);
    });

    //ADD PAGE - returns a webpage for adding words separated by commas 
    //(to be replaced with new word adding system later)
    app.get('/add',function(req,res){
        res.render('add.ejs');
    });
    
    //ADD - takes the postdata from an add POST request and explodes the data based
    //on the "," deliminating character, sorting all the words from the data into the correct
    //database arrays.
    app.post('/add', function(req, res){
        require('./functions/addNewWords.js')(db, req, res);
    });

    //CHECK WORD - cheks if a word is in the database and returns true or false.
    app.get('/check/:word',function(req, res){
        require('./functions/checkWord.js')(db, req, res);
    });

    //RANDOM - gets a random word from the database
    app.get('/random',function(req, res){
        require('./functions/random0.js')(db, req, res);
    });

    //RANDOM WITH 1 PARAMETER - either gets a number of random words, or one random word from
    //a specific starting letter. Depending on if the parameter is a number or letter.
    app.get('/random/:val',function(req, res){
        require('./functions/random1.js')(db, req, res);
    });

    //RANDOM WITH 2 PARAMETERS - gets a number of random words from the specified starting
    //letter, the number and letter can be in either position of the request.
    app.get('/random/:val1/:val2',function(req, res){
        require('./functions/random2.js')(db, req, res);
    });
}