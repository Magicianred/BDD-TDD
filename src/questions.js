/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function(text) {
    return text.length ;
};

///////////////////////////////
var replaceE=function(text){
    return text.replace("e"," ");
}

////////////////////////////////////
var concatString=function(a,b){
    return a+" "+b;
};

/////////////////////////////////////////
var showTheFifthLetter=function(text){
    return text.charAt(4);
};

/////////////////////////////////////////
var showFirstNineLetter=function(text){
    return text.substring(0, 8);
};

/////////////////////////////////////////
var changeToUper=function(text){
    return text.toUpperCase();
};

///////////////////////////////////////////////////
var changeToLower=function(text){
    return text.toLowerCase();
};

//////////////////////////////////////
 var deletSpace=function(text){
     return text.trim();
 };

 ////////////////////////////////////////
 var getBoolean =function(text){
     if(typeof text === "string"){
         return true;
     }
 };

 //////////////////////////////////////
 var showExtenct=function(text){
    return text.split('.').pop();
};

////////////////////////////////////////
var countSpace=function(text){
    return text.split(' ').length - 1;
};


/////////////////////////////////////////////////////////
var reverseString=function(text){
    return text.split('').reverse().join('');
};


