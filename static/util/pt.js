var pt = new Object()

pt.Pt = function(){
    var res = ""
    if (arguments){
        for(var i=0; i<arguments.length; i++){
            res+=arguments[i]
        }
    }
    document.write(res)
}

pt.Ptn = function(){
    var res = ""
    if (arguments){
        for(var i=0; i<arguments.length; i++){
            res+=arguments[i]
        }
    }
    res+="<br/>"
    document.write(res)
}