// 2. Identificando código bloqueante
// Ejercicio:
// Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
// ejecución del programa.
// Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.

    console.log("inicio");
    

    for(let i = 0; i <=1000000; i++)
    {
        console.log(i);
    }

    console.log("fin");
    
    



