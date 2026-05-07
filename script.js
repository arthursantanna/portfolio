const target = document.querySelectorAll('[data-anime]')

function animeScroll(){
    const windowTop = window.scrollY
    target.forEach(function(element){
        if((windowTop) > element.offsetTop - (window.innerHeight * 0.75)){
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')
        }
    })
}
animeScroll()

if(target.length){
window.addEventListener('scroll', function(){
    animeScroll()
})
}

const skills = document.querySelectorAll('#skills')
const certificacoes = document.querySelectorAll('#certificacoes')
function animeBackground(){
    const windowTop = window.scrollY
    skills.forEach(function(element){
        if((windowTop) > element.offsetTop - (window.innerHeight * 0.75)){
            element.style.background = "black"
            document.querySelector("#skills h2").style.color = "white";
        }else{
            element.style.background = "#f9f9f9"
            document.querySelector("#skills h2").style.color = "black";
        }
    })
    certificacoes.forEach(function(element){
        if((windowTop) > element.offsetTop - (window.innerHeight * 0.75)){
            element.style.background = "black"
            document.querySelector("#certificacoes h2").style.color = "white";
            document.querySelector("#certificacoes #mack").style.color = "white";
            document.querySelector("#certificacoes #etec").style.color = "white";
        }else{
            element.style.background = "#f9f9f9"
            document.querySelector("#certificacoes h2").style.color = "black";
            document.querySelector("#certificacoes #mack").style.color = "black";
            document.querySelector("#certificacoes #etec").style.color = "black";
        }
    })
}
    window.addEventListener('scroll', function(){
        animeBackground()
    })


const home = document.querySelector("#home")
const projetos = document.querySelector("#projetos")
const contato = document.querySelector("#contato")
    function darkMode(){
        home.classList.toggle("darkMode")
        projetos.classList.toggle("darkMode")
        contato.classList.toggle("darkMode")
    }
    

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
