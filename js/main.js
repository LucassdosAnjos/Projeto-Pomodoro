const milissegundosPomodoro = 4000 
const milissegundosIntervalo = 300000
//Estamos usando 4 segundos para teste, o tempo oficial é de 25 minutos. O tempo oficial de 25*60*1000
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
let milissegundosRestantes = 0
let contador

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    if(disparador.textContent=="Começar") {
    milissegundosRestantes = milissegundosPomodoro - 1000
    
    } else {
        milissegundosRestantes = milissegundosIntervalo - 1000
    }

contador = setInterval('contadorDeSegundos()',1000);
})

     

function contadorDeSegundos() {
    
    

    if (milissegundosRestantes == 0) {
        cronometro.textContent = "00:00"
        console.log("O seu tempo de produção do pomodoro acabou. Vá descansar!") 
        if(disparador.textContent=="Começar") {
    disparador.textContent="Intervalo"
        document.querySelector('body').style.background = "#287b7e"
        disparador.style.color = "#287b7e"
    } else {
        disparador.textContent="Começar"
        document.querySelector('body').style.background = "rgb(91, 179, 167)"
        disparador.style.color = "rgb(91, 179, 167)"
    }

        
        clearInterval(contador)
    } else {
        cronometro.textContent = formatadorDoTempo(milissegundosRestantes/1000)
    }

    milissegundosRestantes -= 1000;

}

function formatadorDoTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return (minutos.toString().padStart(2,'0')+":"+segundos.toString().padStart(2,'0'))
}
