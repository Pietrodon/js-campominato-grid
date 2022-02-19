//richiamo elementi html
const button = document.getElementById('start-game')
const sceltaLivello = document.getElementById('selec-level')
const griglia = document.getElementsByClassName('.grid')
// ascolto click sul bottone play
button.addEventListener('click', function(){
    // console.log(sceltaLivello.value)

//verifica del livello scelto 
    if(sceltaLivello.value === 'easy'){
        for (let i = 1; i <101; i++) {
            console.log([i]);
            
        }
    } else if(sceltaLivello.value === 'normal'){
        for (let i = 1; i < 82; i++) {
            console.log([i]);
            
        }
    } else{
        for (let i = 1; i < 50; i++) {
            console.log([i]);
            
        }
    }
})