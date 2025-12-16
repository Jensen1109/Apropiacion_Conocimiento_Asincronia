// 6. Manejo de errores con Promesas
// Ejercicio:
// Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
// reject.
// Meta: entender .catch() y la importancia del manejo de errores.

const promesa = new Promise ((resolve,reject) =>
{
    setTimeout(() => {
        const numero = Math.random()
        if(numero>0.5)
        {
            resolve("El proceso fue exitoso")
        }else
        {
            reject("El proceso fallo")
        }
    },1200);
});

promesa
    .then(  (mensaje) =>
    {
        console.log(mensaje);
        
    })
    .catch((error) =>
    {
        console.log(error);
        
    })