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

// Envio do formulário via AJAX (sem redirecionamento)
const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
    contatoForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const feedback = document.getElementById('formFeedback');

        // Estado de carregando
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        feedback.style.display = 'none';

        const formData = new FormData(contatoForm);
        formData.append('_template', 'box');

        try {
            const response = await fetch('https://formsubmit.co/ajax/arthursantanatec@gmail.com', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (response.ok) {
                // Sucesso: mostra mensagem e limpa o formulário
                feedback.textContent = '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.';
                feedback.style.display = 'block';
                feedback.style.color = '#2ecc71';
                feedback.style.marginBottom = '12px';
                feedback.style.fontWeight = '600';
                contatoForm.reset();
                submitBtn.textContent = 'Enviar';
                submitBtn.disabled = false;
            } else {
                throw new Error('Falha no envio');
            }
        } catch (err) {
            // Erro: mostra mensagem de erro
            feedback.textContent = '❌ Ops! Algo deu errado. Tente novamente ou entre em contato pelo email diretamente.';
            feedback.style.display = 'block';
            feedback.style.color = '#e74c3c';
            feedback.style.marginBottom = '12px';
            feedback.style.fontWeight = '600';
            submitBtn.textContent = 'Enviar';
            submitBtn.disabled = false;
        }
    });
}
