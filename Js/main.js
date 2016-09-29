//funcion para multiplicar 2 numeros
function sumar(){
    var input1 = document.getElementById('numero1');
    var input2 = document.getElementById('numero2');
    var res = document.getElementsByClassName('resultado')[0];
    if(isNaN(input1.value)||isNaN(input2.value)||input1.value==""||input2.value==""){//is not a numeric and is null
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
//funcion para agregar listas
function generar(){
    var N = document.getElementById("numero").value;
    var lista = document.createElement("ul");
    for(var i=1;i<=N;i++){
        var item = document.createElement("li");
        item.innerHTML = parseInt(Math.random()*100)+1;
        lista.appendChild(item);
    }
    document.getElementsByTagName("body")[0].appendChild(lista);
    return false;
}
//funcion para cambiar el color de fondo
function cambiarColor(){
    var valor = document.getElementById("color").value;;
    var nuevoColor = "linear-gradient("+valor+", #fff)";
    document.getElementsByTagName("body")[0].style.background = nuevoColor;
}