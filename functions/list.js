module.exports = function(db, req, res){
    db.wordList.findOne(
        {name: 'words'},
        function(err, doc){
            if(err){
                res.send(err);
            }else if(doc){
                var lett = req.params.letter.toUpperCase();
                console.log('Request for list of words starting in '+lett+'...');
                
                if(doc[lett].length == 0) res.json({'message':'No words starting with that letter!'});
                else res.json(doc[lett]);
            }else{
              res.json({'message':'No words starting with that letter!'});
            }
        }
    );
};
