// alert('hello');  //test to link page

var keyList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*-=_+";
var temp = '';

function generatePass(pLength) {
    temp = '';
    for(var i = 0; i < pLength; i++){
        temp += keyList.charAt(Math.floor(Math.random()*keyList.length))
    }
    return temp

};

function populateForm (pickLength) {
    document.passGen.output.value = generatePass(pickLength)
    
};