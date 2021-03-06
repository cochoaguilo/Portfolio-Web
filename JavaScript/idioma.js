
const selecLang = document.querySelector('.selected-lang')
const optionsContainer = document.querySelector('.option-container')
let changeFLag = selecLang.firstElementChild;


//let langElement = selecLang.parentElement;

    optionsContainer.addEventListener('click', ()=>{
        
        const attLang = selecLang.getAttribute('data-lang');
        if(attLang =='es'){
            
            selecLang.lastElementChild.textContent = 'English'
            optionsContainer.lastElementChild.textContent = 'Español'
            selecLang.setAttribute('data-lang', 'en')
            changeFLag.setAttribute('src','../Portfolio/Images/UK-union-flag.svg');
            optionsContainer.firstElementChild.setAttribute("src", "../Portfolio/Images/claudita-Flag-of-Spain.svg")
            sessionStorage.setItem('lang', 'en')
            $('.español').css('display', 'none');
            $('.english').css('display', 'block');
            
            
        }else{
            
            selecLang.lastElementChild.textContent = 'Español'
            optionsContainer.lastElementChild.textContent = 'English'
            changeFLag.setAttribute('src', '../Portfolio/Images/claudita-Flag-of-Spain.svg')
            optionsContainer.firstElementChild.setAttribute('src', '../Portfolio/Images/UK-union-flag.svg')
            selecLang.setAttribute('data-lang', 'es')
            sessionStorage.setItem('lang', 'es')
            $('.español').css('display', 'block');
            $('.english').css('display', 'none');
        }
        
        
        
    })



const data = {
    'es': 
    {
        'titulo': 'Biografía',
        'bio': 'Nacido en Buenos Aires en 1991, desde chico me vi inmerso en el mundo de la tecnología, los videojueogs y el cine. Luego de haber cursado primario y secundario en el Colegio Newman, estudié en distintas universidades las carreras de cine, sonido y programación web',
        'audiovisual': 'En el 2013 arrancaría mi carrera en el mundo del cine y el sonido. Participe en varios cortometrajes en varias areas del sonido además de producir, escribir y dirigir mi propio material',
        'prgrm': 'Desarrollo Web',
        'web': 'En el 2020 comence a investigar el mundo de la programación. Arranque con el curso de Full Stack Web Developer de Acamica, y luego fui aprendiendo distintas tecnologías dentro de Javascript como React, Vue y NodeJS',
        'bio1991': ''
    },
    'en': 
    {
        'titulo': 'Biography',
        'bio': `Born in Buenos Aires in 1991, since I was a kid I've seen myself inmerse in technolgy, videogames and movies. After I attended primary and secondary school at Newman School, I've studied cinematography, sound design and web developer at different universities`,
        'audiovisual': `In 2013 my film and sound carrer started. I participated en many short-films through the diverse areas in the sound department besides producing, writing and directing my own material`,
        'prgrm': 'Web Development',
        'web': `In 2020 I began to investigate the programming world. I started with the Full Stack Web Developer course in Acamica, and then I learned different technologies inside Javascript like React, Vue and NodeJS`,
        'bio1991': `After living 4 years in the city of Azul, I moved to Buenos Aires where I would start the Newman school. He was part of the orchestra playing the transverse flute in addition to participating in different social groups that gave assistance to people in need. When I finished school, I would try to study law but that career turned out to be different from what I thought.`
    }
}