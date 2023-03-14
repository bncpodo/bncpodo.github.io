const h1 = document.querySelector('h1');
const texteDuTitre = "Devenez incollable sur le régime fiscal des Bénéfices Non Commericaux en tant que pédicure-podologue !";
let i = 0;
let interval = setInterval(() => {
h1.innerHTML += texteDuTitre[i]
i++
if (i >= texteDuTitre.length){
clearInterval(interval)
}
}, 60);

window.addEventListener("scroll",() =>{
    const nav = document.querySelector('nav');
    nav.classList.toggle('navScroll', window.scrollY > 0)
})