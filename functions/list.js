module.exports = function(db, req, res){
    db.wordList.findOne(
        {name: 'words'},
        function(err, doc){
            if(err){
                res.send(err);
            }else{
                var lett = req.params.letter.toUpperCase();
                console.log('Request for list of words starting in '+lett+'...');
                res.json(doc[lett]);
            }
        }
    );
}
