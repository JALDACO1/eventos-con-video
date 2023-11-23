let video = document.querySelector('.botonVideo');

 video.addEventListener('play', function(){
    setTimeout(function(){
        ponerColorBody();
    },3000);
     console.log('Di play en el video');
 })

video.addEventListener('seeking', function(){
    console.log('Se esta viendo una parte de el video', this. currentTime);
})

video.addEventListener('ended', function(){
    alert('Termino el video');
    let decision = confirm('¿Deseas ver de nuevo el video?');
    console.log('decision');
    if (decision){
        video.play();
    }else {
        window.location = "http://www.google.com";
    }
})

video.addEventListener('pause', function(){
    console.log('Di pausa en el video');
})

// Temporizadores o timer

 setInterval
 setTimeout

let Temporizador = setInterval(function(){
    ponerColor()

}, 2000);


setTimeout(function(){
    ponerColorBody();
},2000);
function ponerColorBody(){
    let pantalla = document.body;
    pantalla.style.background = 
    pantalla.style.background = pantalla.style.background == "blue" ? "green" : "blue";
}

// Arreglos, Vectores, Arrays(variable)

// let array = ['uno', 'dos', 'tres'];

// let array2 = ['cuatro', 'cinco', 'seis'];

// let multidimensional = [ array, array2];

// array2 [1]

// multidimensional [0][1]; = 'dos';