const { taskOne, taskTwo } = require('./Tasks');

//Esta seria la manera de ejecutar de manera secuencial métodos Async Await, hasta que no termine el primero no continua con el segundo.(SECUENCIAL)
async function MainSecuencial() {
    console.time('Measuring time');
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd('Measuring time');

    console.log('Task One = ', valueOne);
    console.log('Task One = ', valueTwo);
}

//Esta seria la manera de ejecutar de manera paralela métodos Async Await, Esto quiere decir que los dos métodos se inicial al mismo tiempo.(PARALELO)
async function MainParalela() {
    console.time('Measuring time');
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd('Measuring time');

    console.log('Task One = ', results[0]);
    console.log('Task One = ', results[1]);
}

MainSecuencial();
MainParalela();