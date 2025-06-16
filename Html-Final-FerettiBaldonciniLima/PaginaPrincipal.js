
let total=0;

function sumarPrecio(precio, boton){
    

    if((total>=0)){
        total= total + precio;
        document.getElementById("total").textContent ="$" + total;
    }

    /* contador del boton suma */
    let contador = boton.nextElementSibling;
    let cantidad = parseInt(contador.innerText);
    cantidad++;
    contador.innerText = cantidad;
}

function restarPrecio(menos, boton){

    
    /* contador del boton resta*/
    let contador = boton.previousElementSibling;
    let cantidad = parseInt(contador.innerText);

    if(cantidad>0){
        cantidad--;
        contador.innerText = cantidad;   

        total=total-menos;
        document.getElementById("total").textContent = "$" + total;
    }
    

}

function Descuento(){

    let descuento=document.getElementById("descuento").value;
    if(descuento=="15off"){
        descuentofinal = total-(0.15*total);
        
    } else if(descuento=="50off"){
        descuentofinal = total-(0.50*total);
     
    } else if(descuento=="75off"){
        descuentofinal = total-(0.75*total);
   
    } else if(descuento=="free"){
        descuentofinal = total-total;   
    }
    else{
        alert("No es un cupón valido")
        descuentofinal=total;
    }
    localStorage.setItem("preciofinal", descuentofinal);
    
    document.getElementById("total").textContent = "$" + descuentofinal;

}

function total1() {
    let preciofinal = localStorage.getItem("preciofinal");
    document.getElementById("monto").textContent = preciofinal;
    
}

function pedido(){ 
    window.location.href = "index.html"; 
}

/* FUNCIONES DEL INDEX */

function alta(){
    let usuario=document.getElementById("usuario").value;
    let clave=document.getElementById("clave").value;

    if (usuario=="gula" && clave=="123"){
        window.location.href="registro.html"
    }else{
        alert("Contraseña Incorrecta")
    }
}

/* FUNCIONES DEL REGISTRO*/
function enviar(){
    let pago=document.getElementById("Pago").value;
    if(pago== "Efectivo"){
        alert("Recordá pagar con la cantidad justa")
    }
    window.location.href="pedidofinalizado.html"
}


function volver(){

    window.location.href="PaginaPrincipal.html";
}

