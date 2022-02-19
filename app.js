const button = document.getElementById('start-game')
const sceltaLivello = document.getElementById('selec-level')


button.addEventListener('click', function(){
    // console.log(sceltaLivello.value)

    if(sceltaLivello.value === 'easy'){
        console.log('caso1')
    } else if(sceltaLivello.value === 'normal'){
        console.log('caso2')
    } else{
        console.log('caso3')
    }
})