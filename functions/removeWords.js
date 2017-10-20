module.exports = function(db, req, res){

  console.log('Removing words...');

  //initialize a variable for the starting index of each word in our list
  var start = 0;
  //initialize a variable for the ending index of each word in our list
  var end = 0;
  //a variable for which character will deliminate, or separate our words.
  var char = ",";

  //get the list from our request object, add a deliminator at the end so that
  //the program knows when to stop.
  var mainList = req.body.value+char;

  //initialize an array for each letter of the alphabet, we will sort our words
  //from the list into these so that we can enter each word into the database sorted
  //by its first letter.
  var aa = [], bb = [], cc = [], dd = [], ee = [], ff = [],
      gg = [], hh = [], ii = [], jj = [], kk = [], ll = [],
      mm = [], nn = [], oo = [], pp = [], qq = [], rr = [],
      ss = [], tt = [], uu = [], vv = [], ww = [], xx = [],
      yy = [], zz = [];

  db.wordList.findOne(
    {name: 'words'},
    function(err, doc){
      if(err) console.log(err);
      else if(doc){

        //cycle through the input list, one character at a time
        for(i=0;i<mainList.length;i++){
            //if the character currently in view is the deliminating character...
            var substr = mainList.substring(i,i+1);
            if (substr == char){
              //take the position of the last deliminating character and add one, then take
              //the substing between the last deliminator position and the current one.
              end = i;
              var entry = mainList.substring(start,end);

              //if the begining of the word has a space remove it.
              if(entry.substring(0,1) == " "){
                entry = entry.substring(1, entry.length);
              }

              //if the end of the word has a space remove it.
              if(entry.substring(entry.length-1, entry.length) == " "){
                entry = entry.substring(0, entry.length-1);
              }

              //function that takes the first letter from the new entry text,
              //then chooses the array for that starting letter and adds the word to the end.

              removeEntriesFromArrays(entry, doc);

              //set the new start point to right after the deliminator that triggered.
              start = end+1;
            }

        }

        //once we get all of the entries into separate arrays, we take each array and add all of
        //its values to the correct databases.
        updateArraysInDB(db, doc, req, res);
      }
  });
};




// //////////////////////////////////////////////////////////////////////////////////////////
// //----------------------------------FUNCTIONS-------------------------------------------//
// //////////////////////////////////////////////////////////////////////////////////////////


function removeEntriesFromArrays(entry, doc){
    //get the first letter of the supplied entry,
    //and add it to the array that goes with that letter

    switch(entry.substring(0,1).toLowerCase()){
        case 'a':
          doc.A.splice(doc.A.indexOf(entry), 1);
        break;

        case 'b':
          doc.B.splice(doc.B.indexOf(entry), 1);
        break;

        case 'c':
          doc.C.splice(doc.C.indexOf(entry), 1);
        break;

        case 'd':
          doc.D.splice(doc.D.indexOf(entry), 1);
        break;

        case 'e':
          doc.E.splice(doc.E.indexOf(entry), 1);
        break;

        case 'f':
          doc.F.splice(doc.F.indexOf(entry), 1);
        break;

        case 'g':
          doc.G.splice(doc.G.indexOf(entry), 1);
        break;

        case 'h':
          doc.H.splice(doc.H.indexOf(entry), 1);
        break;

        case 'i':
          doc.I.splice(doc.I.indexOf(entry), 1);
        break;

        case 'j':
          doc.J.splice(doc.J.indexOf(entry), 1);
        break;

        case 'k':
          doc.K.splice(doc.K.indexOf(entry), 1);
        break;

        case 'l':
          doc.L.splice(doc.L.indexOf(entry), 1);
        break;

        case 'm':
          doc.M.splice(doc.M.indexOf(entry), 1);
        break;

        case 'n':
          doc.N.splice(doc.N.indexOf(entry), 1);
        break;

        case 'o':
          doc.O.splice(doc.O.indexOf(entry), 1);
        break;

        case 'p':
          doc.P.splice(doc.P.indexOf(entry), 1);
        break;

        case 'q':
          doc.Q.splice(doc.Q.indexOf(entry), 1);
        break;

        case 'r':
          doc.R.splice(doc.R.indexOf(entry), 1);
        break;

        case 's':
          doc.S.splice(doc.S.indexOf(entry), 1);
        break;

        case 't':
          doc.T.splice(doc.T.indexOf(entry), 1);
        break;

        case 'u':
          doc.U.splice(doc.U.indexOf(entry), 1);
        break;

        case 'v':
          doc.V.splice(doc.V.indexOf(entry), 1);
        break;

        case 'w':
          doc.W.splice(doc.W.indexOf(entry), 1);
        break;

        case 'x':
          doc.X.splice(doc.X.indexOf(entry), 1);
        break;

        case 'y':
          doc.Y.splice(doc.Y.indexOf(entry), 1);
        break;

        case 'z':
          doc.Z.splice(doc.Z.indexOf(entry), 1);
        break;
    }
}


function updateArraysInDB(db, doc, req, res){
    //for each letters' array, add its contents to the database array for the correct letter
    db.wordList.update(
        { name: 'words'},
        {
          "name": "words",
          A: doc.A,
          B: doc.B,
          C: doc.C,
          D: doc.D,
          E: doc.E,
          F: doc.F,
          G: doc.G,
          H: doc.H,
          I: doc.I,
          J: doc.J,
          K: doc.K,
          L: doc.L,
          M: doc.M,
          N: doc.N,
          O: doc.O,
          P: doc.P,
          Q: doc.Q,
          R: doc.R,
          S: doc.S,
          T: doc.T,
          U: doc.U,
          V: doc.V,
          W: doc.W,
          X: doc.X,
          Y: doc.Y,
          Z: doc.Z
        },
        function(err, doc){
          console.log(req);
            if(err){
                res.send(err);
            }else{
                console.log('Adding '+req.body.value+'...');
                res.json(doc);
            }
        }
    );
}
