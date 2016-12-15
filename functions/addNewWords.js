module.exports = function(db, req, res){
    
    console.log('Adding words...')
    
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
    
    
    //cycle through the input list, one character at a time
    for(i=0;i<mainList.length;i++){
        //if the character currently in view is the deliminating character...
        var substr = mainList.substring(i,i+1);
        if (substr == char){
            //take the position of the last deliminating character and add one, then take
            //the substing between the last deliminator position and the current one.
            end = i;
            var entry = mainList.substring(start,end);
            
            //function that takes the first letter from the new entry text,
            //then chooses the array for that starting letter and adds the word to the end.
            insertEntriesIntoArrays(entry,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz);
            
            //set the new start point to right after the deliminator that triggered.
            start = end+1;
        }
    }
    
    //once we get all of the entries into separate arrays, we take each array and add all of
    //its values to the correct databases.
    insertArraysIntoDB(db,req,res,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz);
}



//////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------FUNCTIONS-------------------------------------------//
//////////////////////////////////////////////////////////////////////////////////////////


function insertEntriesIntoArrays(entry,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz){
    //get the first letter of the supplied entry,
    //and add it to the array that goes with that letter
    switch(entry.substring(0,1).toLowerCase()){
        case 'a':
            aa.push(entry);
        break;

        case 'b':
            bb.push(entry);
        break;

        case 'c':
            cc.push(entry);
        break;

        case 'd':
            dd.push(entry);
        break;

        case 'e':
            ee.push(entry);
        break;

        case 'f':
            ff.push(entry);
        break;

        case 'g':
            gg.push(entry);
        break;

        case 'h':
            hh.push(entry);
        break;

        case 'i':
            ii.push(entry);
        break;

        case 'j':
            jj.push(entry);
        break;

        case 'k':
            kk.push(entry);
        break;

        case 'l':
            ll.push(entry);
        break;

        case 'm':
            mm.push(entry);
        break;

        case 'n':
            nn.push(entry);
        break;

        case 'o':
            oo.push(entry);
        break;

        case 'p':
            pp.push(entry);
        break;

        case 'q':
            qq.push(entry);
        break;

        case 'r':
            rr.push(entry);
        break;

        case 's':
            ss.push(entry);
        break;

        case 't':
            tt.push(entry);
        break;

        case 'u':
            uu.push(entry);
        break;

        case 'v':
            vv.push(entry);
        break;

        case 'w':
            ww.push(entry);
        break;

        case 'x':
            xx.push(entry);
        break;

        case 'y':
            yy.push(entry);
        break;

        case 'z':
            zz.push(entry);
        break;
    }
}


function insertArraysIntoDB(db,req,res,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz){
    //for each letters' array, add its contents to the database array for the correct letter
    db.wordList.update(
        { name: 'words'},
        {
            $addToSet: {
                A: {
                    $each: aa
                },
                B:{
                    $each: bb
                },
                C:{
                    $each: cc
                },
                D: {
                    $each: dd
                },
                E:{
                    $each: ee
                },
                F:{
                    $each: ff
                },
                G: {
                    $each: gg
                },
                H:{
                    $each: hh
                },
                I:{
                    $each: ii
                },
                J: {
                    $each: jj
                },
                K:{
                    $each: kk
                },
                L:{
                    $each: ll
                },
                M: {
                    $each: mm
                },
                N:{
                    $each: nn
                },
                O:{
                    $each: oo
                },
                P: {
                    $each: pp
                },
                Q:{
                    $each: qq
                },
                R:{
                    $each: rr
                },
                S: {
                    $each: ss
                },
                T:{
                    $each: tt
                },
                U:{
                    $each: uu
                },
                V:{
                    $each: vv
                },
                W:{
                    $each: ww
                },
                X:{
                    $each: xx
                },
                Y:{
                    $each: yy
                },
                Z:{
                    $each: zz
                }
            }
        },
        function(err, doc){
            if(err){
                res.send(err);
            }else{
                console.log('Adding '+req.body.value+'...');
                res.json(doc);
            }
        }
    );
}