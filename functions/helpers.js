module.exports = {
    
    choose:function(){
        var amnt = arguments.length;
        var val = Math.floor(Math.random()*amnt);
        
        return arguments[val];
    },
    
    random:function(maxNumber){
        return Math.floor(Math.random()*maxNumber);
    }
}