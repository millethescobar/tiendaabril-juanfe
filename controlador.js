let cajausuario=document.getElementById("usuario")
let cajacorreo=document.getElementById("correo")
let cajacontraseña=document.getElementById("contraseña")

//validando el formulario
let boton=document.getElementById("boton")

boton.addEventListener("click",function(evento){ evento.preventDefault()

    if(cajausuario.value=="" && cajacorreo.value=="" && cajacontraseña.value==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "tienes campos sin llenar"
            
          });
    }else{
      

        Swal.fire({
            title: "buen trabajo!",
            text: "bienvenido, espera un momento!",
            icon: "success"
          });
        setTimeout(function(){
          window.location.href="./home.html"
        },5000)
    }
})