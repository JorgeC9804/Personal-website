var saludo = "hola";
console.log(saludo);

function sumaArreglos()
{
    var arr = [1,2,3,4,5,6,7,8,9];

    console.log(arr[4]);
    var suma = 0;
    for(var i=0; i<arr.length; i++) 
    {
        console.log(suma+" + "+arr[i] +" = "+ (suma = suma + arr[i]));
    }

    console.log("La suma total es: "+suma);
}


function mitad ()
{
    var arr = [4,34,74,24,79,3,100,76,18,14,28,16];
    var aux1, aux2;

    if(arr.length % 2 == 0)
    {
        aux2 = arr.length / 2;
        aux2 = aux2 - 1;
        console.log('Muestra de dos numeros');
        console.log(arr[aux2]);
        console.log(arr[aux2+1]);
    }

    else 
    {
        aux1 = arr.length - 1; /* 9-1=8  */ 
        console.log('Muestra de un numero');
        aux1 = aux1 / 2;
        console.log(arr[aux1]);
    }

}

/*const integer = parseInt(nombre-variable) */

sumaArreglos();

mitad();