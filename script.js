const smiles = ['❤', '❤', '😍', '😍', '😂', '😂', '😜', '😜', '👀', '👀', '✔', '✔', '✌', '✌', '😎', '😎']

let suffle_smiles = smiles.sort(() => (Math.random() > .5) ? 2 : -1);
const display = document.getElementById("display");

let timer = null;

let startTime= 0;

let elapsedTime=0;

let isRuning = false;

 

for (let i = 0; i < smiles.length; i++) {

    let box = document.createElement('div');

    box.className = 'item';

    box.innerHTML = suffle_smiles[i]

   

 

    box.onclick = function(){
       
        this.classList.add('boxOpen')

 

        setTimeout(() => {

            if(document.querySelectorAll('.boxOpen').length > 1){

               if(document.querySelectorAll('.boxOpen')[0].innerHTML ==document.querySelectorAll('.boxOpen')[1].innerHTML ){

                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');

                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

 

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');

                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

 

                if(document.querySelectorAll('.boxMatch').length == smiles.length){

                    alert("YOU WIN ! ")
                    stop();

                }

 

               }

               else{

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');

                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

               }

            }

        }, 400);

    }

 

    document.querySelector('.game').appendChild(box)

 

}

 

function start(){

    if(!isRuning){

        startTime= Date.now() - elapsedTime;

        timer = setInterval(update,10);

        isRuning = true;

    }

}

function stop(){

    if(isRuning){

        clearInterval(timer)

        elapsedTime = Date.now() - startTime;

        isRuning =false;

    }

}

function reset(){

    clearInterval(timer);

    startTime = 0;

    elapsedTime = 0;

    isRuning = false;

    display.textContent = "00:00:00:00"

}



function update(){
    const currentTime = Date.now();

    elapsedTime = currentTime - startTime;

 

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);

    let seconds =Math.floor(elapsedTime / 1000 % 60);

    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

 

    hours = String(hours).padStart(2,"0")

    minutes = String(minutes).padStart(2,"0")

    seconds = String(seconds).padStart(2,"0")

    miliseconds = String(miliseconds).padStart(2,"0")

 

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`

 

}  