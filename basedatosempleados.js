let empleados=Array(
    {
        id:1,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    },
    {
        id:2,
        nombre:"jamer escobar",
        cargo:"empelado de logistica",
        telefono:"3043085952",
        cotteo:"jamer escobar",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img36.jpg"
    },
    {
        id:3,
        nombre:"nevis martinez",
        cargo:"gerente",
        telefono:"3043085952",
        cotteo:"nevis martinez",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img34.jpg"
    },
    {
        id:4,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    },
    {
        id:5,
        nombre:"nelly mosquera",
        cargo:"acesora comercial",
        telefono:"3043085952",
        cotteo:"nelly02@",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img33.jpg"
    },
    {
        id:6,
        nombre:"juan diego",
        cargo:"director de bodega",
        telefono:"3043085952",
        cotteo:"juan velez",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img35.jpg"
    },
    {
        id:7,
        nombre:"oscar ",
        cargo:"empleado",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img32.jpg"
    },
    {
        id:8,
        nombre:"david mena",
        cargo:"progranador",
        telefono:"3043085952",
        cotteo:"menadavid@",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img37.jpg"
    },
    {
        id:9,
        nombre:"luciana mena",
        cargo:"empleada domestica",
        telefono:"3043085952",
        cotteo:"menaluciana@",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img38.jpg"
    },
    {
        id:10,
        nombre:"camila moreno",
        cargo:"acesora",
        telefono:"3043085952",
        cotteo:"camilamoreno@",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img39.jpg"
    },
    {
        id:11,
        nombre:"allison mosquera",
        cargo:"maquilladora",
        telefono:"3043085952",
        cotteo:"mosqueraallison@",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img40.jpg"
    },
    {
        id:12,
        nombre:"andry milleth escobar",
        cargo:"administradora",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img41.jpg"
    },
    {
        id:13,
        nombre:"yefer",
        cargo:"acesor comercial",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/img42.jpg"
    },
    {
        id:14,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    },
    {
        id:15,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    },
    {
        id:16,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    },
    {
        id:17,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    },
    {
        id:18,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        cotteo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    },
    {
        id:19,
        nombre:"andry milleth escobar",
        cargo:"jefe",
        telefono:"3043085952",
        correo:"andryescobar02@gmail.com",
        salario:13000000,
        contactoemergencia:"3236541419",
        foto:"./img/afro1.jpg"
    }
)



// creando yna referencia  al contenedor de empreados
let contenedor=document.getElementById("container")
                                                                                                                                              
// pasos para crear una lista dinamica de elementos 

//1 debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){
   
    let columna=document.createElement("div")
     columna.classList.add("col")

    let tarjeta=document.createElement("div")
      tarjeta.classList.add("card","shadow")

    let foto=document.createElement("img")
      foto.classList.add("img-fluid" , "mx-auto","d-block")
      foto.src=empleado.foto

    let nombre=document.createElement("h3")
      nombre.textContent=empleado.nombre  

      let cargo=document.createElement("h3")
      cargo.textContent=empleado.cargo

      let telefono=document.createElement("h3")
      telefono.textContent=empleado.telefono


      let correo=document.createElement("h3")
      correo.textContent=empleado.correo

      let salario=document.createElement("h3")
      salario.textContent=empleado.salario

      // se asovian las estructuras en ordan logico
      tarjeta.appendChild(foto)
      tarjeta.appendChild(nombre)
      tarjeta.appendChild(cargo)
      tarjeta.appendChild(telefono)
      tarjeta.appendChild(correo)
      tarjeta.appendChild(salario)
      columna.appendChild(tarjeta)
      contenedor.appendChild(columna)
      

})

