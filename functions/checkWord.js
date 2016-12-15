module.exports = function(db, req, res){
    db.wordList.findOne(
        {name: 'words'},
        function(err, doc){
            if(err){
                res.send(err);
            }else{
                console.log('Request for word existence...');
                var word = req.params.word;
                var lett = word.substring(0,1).toUpperCase();

                if(doc[lett].indexOf(word) > -1){
                    res.json({"result":true});
                }
                else{
                    res.json({"result":false});
                }
            }
        }
    );
}