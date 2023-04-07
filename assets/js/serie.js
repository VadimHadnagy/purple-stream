let slider = document.getElementById('slider');
let catalog = document.getElementsByClassName('catalog')[0];
let img_anime = document.getElementsByClassName('anime');
let main = document.querySelector('main');


let anime = [
            ['Demon Slayer', 3, [25, 17, 24], "La légende raconte aussi qu'un tueur déambule la nuit, chassant ces démons assoiffés de sang. Depuis la mort de son père, Tanjiro a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.", 'demon-slayer.jpg'],
            ['Boruto', 3, [293], "Depuis que son père est devenu Hokage et occupe la plus haute fonction du village de Konoha, Boruto Uzumaki, fils de Naruto Uzumaki et Hinata Hyûga, vit dans l'ombre de celui-ci. Cherchant toujours à attirer l'attention de ce dernier, il a pris la ferme résolution de le surpasser.", 'boruto.png']];

// Créer un élément h3
let h3 = document.createElement('h3');
 // Définir le texte du titre

// Créer un élément p
let p = document.createElement('p');

let p__saisson = document.createElement('p');
// Définir le texte du paragraphe

// Créer un élément img
let img = document.createElement('img');
 // Définir le chemin de l'image

// Créer un élément div
let contener = document.createElement('div');
let contener_INFO = document.createElement('div');
let contener_IMG = document.createElement('div');
let contenaire_VIDEO = document.createElement('div');




for(let i = 0; i < img_anime.length; i++){
    img_anime[i].addEventListener('click', function(){
        
        console.log('clicked on', anime[i][0]);
        
        slider.style.display = 'none';
        catalog.style.display = 'none';
        
        contener.classList.add('container');
        contener_IMG.classList.add('block--left');
        contener_INFO.classList.add('block--right');


        main.appendChild(contener);
        contener.appendChild(contener_IMG);
        contener.appendChild(contener_INFO);

        contener_IMG.appendChild(img)
        img.classList.add('img__info')
        img.src = 'assets/img/serie/'+anime[i][4];


        contener_IMG.appendChild(h3);
        h3.classList.add('h3__info')
        h3.textContent = anime[i][0];

        contener_IMG.appendChild(p__saisson);
        p__saisson.classList.add('p__saison');
        p__saisson.textContent = anime[i][2].length+" Saison";

        contener_IMG.appendChild(p);
        p.classList.add('p__info');
        p.textContent = anime[i][3];



        contenaire_VIDEO.classList.add('container__series'); 
        contener_INFO.appendChild(contenaire_VIDEO);
        for(let j = 1; j <= anime[i][2][0]; j++){
            let div2 = document.createElement('div');
            div2.classList.add('align__box'); 

            let img_serie = document.createElement('img'); 
            img_serie.classList.add('img__serie_click'); 
            img_serie.src = 'assets/img/serie/images.png';

            let p = document.createElement('p'); 
            p.textContent = 'Ep ' + j; 
            p.classList.add('p__serie_click'); 

            contenaire_VIDEO.appendChild(div2);
            div2.appendChild(img_serie); 
            div2.appendChild(p); 
        }
    });
}

