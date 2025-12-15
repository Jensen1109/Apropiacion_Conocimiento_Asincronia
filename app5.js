// 5. Transformando Callbacks en Promesas
// Ejercicio:
// Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
// Meta: visualizar cómo mejora la legibilidad.

const tomardatos = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("datos tomados");
    },1500)
});

const procesardatos = new Promise((resolve, reject)=>
{
    setTimeout(() => {
        resolve("no se procesaron los datos")
    }, 1500);
});



tomardatos.then((resultado)=>
{
    console.log(resultado);
    
})
procesardatos.then((resultado2)=>
{
    console.log(resultado2);
    
})

