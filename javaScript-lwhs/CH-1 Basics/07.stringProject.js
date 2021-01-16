var chai=document.querySelector('#chai');
var raton=document.getElementById('raton');
var result=document.querySelector('#result');


raton.addEventListener('keypress',function(){

    var match = chai.value.indexOf(raton.value);
    //result.innerHTML=raton.value;
    if(-1===match){
        result.innerHTML=`The value ${raton.value} was not found ${match}`;
    }
    else{
        result.innerHTML=`The value ${raton.value} was found at ${match}`;
    }
});
// problem ace