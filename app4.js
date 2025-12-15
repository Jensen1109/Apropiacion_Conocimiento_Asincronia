// 4. Encadenamiento de Callbacks (Callback Hell controlado)
// Ejercicio:
// Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
// resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
// Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.

function tomardatos(callback)
{
    setTimeout(()=>
    {
        console.log("datos tomados");
        callback()
    },1000)
}

function procesardatos(callback)
{
    setTimeout(()=>
    {
        console.log("datos procesados");
        callback()
        
    },1000)
}

const mostrarresultado=()=>
{
    console.log("Mostrar resultados");
    
}

tomardatos(()=>
{
    procesardatos(()=>
    {
        mostrarresultado()
        
    })
})