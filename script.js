// prendo l'elemento dell'immagine

const immagine = document.getElementById("isImage");

const bottone = document.getElementById("bottone");

//accensione lampadina

bottone.addEventListener("click",
     function(){
        //cambio immagine
        immagine.src = "./img/yellow_lamp.png"
     }
    )