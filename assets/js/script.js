let slidernext = document.getElementsByClassName('owl-next')[0];
let sliderprev = document.getElementsByClassName('owl-prev')[0];
let counter = 1;


let slider__text = document.getElementsByClassName('slider__text')[0];
let title = document.getElementById('title');
let slider__description = document.getElementById('slider__description');
let slider__categorie = document.getElementsByClassName('slider__categorie')[0];
let video = document.getElementById('slider__video');
const poster = document.querySelector('.video__poster');

slidernext.addEventListener('click', function(){

    if(counter === 1){
        console.log('page 2');
        video.src = "assets/videos/demonslayers3.mp4"
        slider__categorie.textContent = "Action | Aventure"
        slider__text.textContent = "Demon Slayer:"
        title.textContent = "Kimetsu no Yaiba Swordsmith Village Arc"
        slider__description.textContent = 'Le voyage de Tanjiro le mène au village des forgerons...'
        counter +=1
    }else if(counter === 2){
        console.log('page 3');
        video.src = "assets/videos/rein.mp4"
        slider__categorie.textContent = "Isekai"
        slider__text.textContent = "JE ME FAIS ISEKAI POUR LA DEUXIÈME FOIS:"
        title.textContent = "ÇA COMMENCE À FAIRE BEAUCOUP"
        slider__description.textContent = 'Invoqué dans un autre monde... Encore ? !'
        counter +=1
    }else{
        counter +=1
        console.log('page 1');
        video.src = "assets/videos/zoom100.mp4"
        slider__categorie.textContent = "Horreur | Comedie"
        slider__text.textContent = "Zoom 100:"
        title.textContent = "Bucket list of the dead"
        slider__description.textContent = 'Il à bien 100 objectifs à atteindre...'
        counter = 1;
    }
});


sliderprev.addEventListener('click', function(){
    if(counter === 1){
        counter = 3;
        console.log('page 3');
        video.src = "assets/videos/rein.mp4"
        slider__categorie.textContent = "Isekai"
        slider__text.textContent = "JE ME FAIS ISEKAI POUR LA DEUXIÈME FOIS:"
        title.textContent = "ÇA COMMENCE À FAIRE BEAUCOUP"
        slider__description.textContent = 'Invoqué dans un autre monde... Encore ? !'
    }else if(counter === 2){
        counter = 1;
        console.log('page 1');
        video.src = "assets/videos/zoom100.mp4"
        slider__categorie.textContent = "Horreur | Comedie"
        slider__text.textContent = "Zoom 100:"
        title.textContent = "Bucket list of the dead"
        slider__description.textContent = 'Il à bien 100 objectifs à atteindre...'
    }else{
        counter = 2;
        console.log('page 2');
        video.src = "assets/videos/demonslayers3.mp4"
        slider__categorie.textContent = "Action | Aventure"
        slider__text.textContent = "Demon Slayer:"
        title.textContent = "Kimetsu no Yaiba Swordsmith Village Arc"
        slider__description.textContent = 'Le voyage de Tanjiro le mène au village des forgerons...'
    }
});


const soundBtn_active = document.getElementById("sound-btn-active");
const soundBtn_stop = document.getElementById("sound-btn-stop");
soundBtn_active.style.display ='none'

function toggleSound() {
    if (video.muted) {
        video.muted = false;
        soundBtn_stop.style.display ='none'
        soundBtn_active.style.display ='block'
        video.volume = 0.3;
    } else {
        soundBtn_active.style.display ='none'
        soundBtn_stop.style.display ='block'
        video.muted = true;
        soundBtn.textContent = "<i class='fa-light fa-volume-slash'></i>";
    }
}


  