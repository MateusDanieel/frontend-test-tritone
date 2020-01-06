// NAVBAR MENU

let menu = [
    document.querySelector('#n1'), 
    document.querySelector('#n2'),
    document.querySelector('#n3'),
    document.querySelector('#n4')
];

let opts = [
    document.querySelector('#a1'),
    document.querySelector('#a2'),
    document.querySelector('#a3'),
    document.querySelector('#a4')
];

for(let i in menu){
    menu[i].classList.remove('active');
};

menu[0].classList.add('active');

for(let i in opts){
    opts[i].style.display = 'none';
};

opts[0].style.display = 'block';

menu[0].addEventListener('click', ()=>{
    
    for(let i in menu){
        menu[i].classList.remove('active');
    };

    menu[0].classList.add('active');

    for(let i in opts){
        opts[i].style.display = 'none';
    };

    opts[0].style.display = 'block';
    
});

menu[1].addEventListener('click', ()=>{
    
    for(let i in menu){
        menu[i].classList.remove('active');
    };

    menu[1].classList.add('active');

    for(let i in opts){
        opts[i].style.display = 'none';
    };

    opts[1].style.display = 'block';
    
});

menu[2].addEventListener('click', ()=>{
    
    for(let i in menu){
        menu[i].classList.remove('active');
    };

    menu[2].classList.add('active');

    for(let i in opts){
        opts[i].style.display = 'none';
    };

    opts[2].style.display = 'block';
    
});

menu[3].addEventListener('click', ()=>{
    
    for(let i in menu){
        menu[i].classList.remove('active');
    };

    menu[3].classList.add('active');

    for(let i in opts){
        opts[i].style.display = 'none';
    };

    opts[3].style.display = 'block';
    
});

// ACCORDION

let a = document.querySelector('#btnToggleA');
let b = document.querySelector('#btnToggleB');

a.addEventListener('click', ()=>{

    if(a.className == "active"){
        a.classList.remove("active");

        document.querySelector("#btnToggleA > span").innerHTML = '+';
    } else {
        a.classList.add("active");
        b.classList.remove("active");

        document.querySelector("#btnToggleA > span").innerHTML = '-';
        document.querySelector("#btnToggleB > span").innerHTML = '+';
    }
   
});

b.addEventListener('click', ()=>{
    
    if(b.className == "active"){
        b.classList.remove("active");

        document.querySelector("#btnToggleB > span").innerHTML = '+';
    } else {
        a.classList.remove("active");
    b.classList.add("active");

    document.querySelector("#btnToggleA > span").innerHTML = '+';
    document.querySelector("#btnToggleB > span").innerHTML = '-';
    }
   
});

// CAROUSEL



