module.exports = function(app, db){

    //API MAIN DIRECTORY - returns help information for users to understand how to use.
    app.get('/', function(req, res){
        res.render('home.ejs');
    });

    //LIST - returns all words of a certain letter.
    app.get('/list/', function(req,res){
        res.send('Invalid Request: /list needs a letter in the request ie: /list/a');
    });

    app.get('/list/:letter', function(req,res){
        require('./functions/list.js')(db, req, res);
    });

    //ADD PAGE - returns a webpage for adding words separated by commas
    app.get('/add',function(req,res){
        res.render('add.ejs');
    });

    //ADD - takes the postdata from an add POST request and explodes the data based
    //on the "," deliminating character, sorting all the words from the data into the correct
    //database arrays.
    app.post('/add', function(req, res){
        require('./functions/addNewWords.js')(req, res, db);
    });

    //REMOVE PAGE - returns a webpage for removing words separated by commas
    app.get('/remove',function(req,res){
        res.render('remove.ejs');
    });

    //REMOVE - takes the postdata from a remove POST request and explodes the data based
    //on the "," deliminating character, finding all of the words in the correct arrays
    //and removing them
    app.post('/remove', function(req, res){
        require('./functions/removeWords.js')(db, req, res);
    });

    //CHECK WORD - checks if a word is in the database and returns true or false.
    app.get('/check/:word', function(req, res){
        require('./functions/checkWord.js')(db, req, res);
    });

    //RANDOM - gets a random word from the database
    app.get('/random',function(req, res){
        require('./functions/randomNoParam.js')(db, req, res);
    });

    //RANDOM WITH 1 PARAMETER - either gets a number of random words, or one random word from
    //a specific starting letter. Depending on if the parameter is a number or letter.
    app.get('/random/:val',function(req, res){
        require('./functions/randomOneParam.js')(db, req, res);
    });

    //RANDOM WITH 2 PARAMETERS - gets a number of random words from the specified starting
    //letter, the number and letter can be in either position of the request.
    app.get('/random/:val1/:val2',function(req, res){
        require('./functions/randomTwoParam.js')(db, req, res);
    });
};
