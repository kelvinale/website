// menu

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}

const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

// modo oscuro

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');

    if(toggleIcon.src.includes('luna.svg')){
        toggleIcon.src='assets/icons/sol.svg';
        toggleText.textContent = 'Modo Claro';
    }else{
        toggleIcon.src='assets/icons/luna.svg';
        toggleText.textContent = 'Modo Oscuro';
    }
});

toggleColors.addEventListener('click', (e) =>{
    // console.log(e);
    rootStyles.setProperty('--color-primario', e.target.dataset.color);
});

// spinner

window.onload = function(){
    let contenedor = document.getElementById('contenedor-carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
};