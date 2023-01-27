const segundosPomodoro = 4000 //Estamos usando 4 segundos. O tempo oficial de 25*60*1000
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    // Criando o cronometro
    setTimeout( () => {
        console.log("Acabou o pomodoro!");
        alert("O seu tempo de produção de pomodoro acabou. Vá descansar!") 
        clearInterval(contador)  
    }, segundosPomodoro)
    
    let contador = setInterval('contadorDeSegundos()',1000);
})

function contadorDeSegundos() {
    console.log('tick')
}

