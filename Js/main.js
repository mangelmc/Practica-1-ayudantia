function sumar(){
    var input1 = document.getElementById('numero1');
    var input2 = document.getElementById('numero2');
    var res = document.getElementsByClassName('resultado')[0];
    if(isNaN(input1.value)||isNaN(input2.value)||input1.value==""||input2.value==""){//is not a numeric and null
        res.style.background = "red"; //rgb
        res.style.color="white";
        res.innerHTML = "Error";
    }
    else{
        res.style.background = "black"; //rgb
        res.style.color="white";
        var total = parseInt(input1.value) * parseInt(input2.value);
        res.innerHTML = total;
    }
    return false;
}