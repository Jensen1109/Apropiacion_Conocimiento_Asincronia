    // 7. Uso de Async/Await
    // Ejercicio:
    // Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado.
    // Meta: comprender cómo await pausa la ejecución sin bloquear el hilo.

function Procesoasincronado()
{
    return new Promise((resolve)=>
        {
        setTimeout(() => {
                resolve("Proceso completado despues de 2 segundos")
        },1200);
        })
}

async function ejeutarproceso() {
        console.log("Iniciando proceso");
        const resultado = await Procesoasincronado();
        console.log(resultado);
        console.log("fin del programa");
        
}
ejeutarproceso();

