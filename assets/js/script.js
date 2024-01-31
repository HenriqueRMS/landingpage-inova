let allStepButtons = document.querySelectorAll('.howworks-stepguide--item')
console.log(allStepButtons)

let allStepContainers = document.querySelectorAll('.howworks-container')
console.log(allStepContainers)

allStepButtons.forEach(function(stepbtn, index){
    stepbtn.addEventListener('click', function(){
        showStepContainer(index)

        selectBtn(index)
    })
    
})

function showStepContainer(index) {
   
    allStepContainers.forEach(function(container) {
      container.classList.add('hiddencontainer');
    });
  
   
    let selectedContainer = allStepContainers[index];
    selectedContainer.classList.remove('hiddencontainer');
    
  }
  
function selectBtn(index){
    allStepButtons.forEach(function(item){
        item.classList.remove('selected-step')
    })
    let currentBtn = allStepButtons[index];
    currentBtn.classList.add('selected-step')
}


let knowmoreBtns = document.querySelectorAll('.howworks-container--button')
knowmoreBtns.forEach(function(itemBtn){
    itemBtn.addEventListener('click', function(){
        alert('Este botão "Saiba Mais" é meramente ilustrativo. O projeto associado a esta demonstração é fictício e não possui funcionalidades ativas ;)');

    })
})

let ctaBtn = document.querySelectorAll('.cta-btn')
ctaBtn.forEach(function(itemBtn){
    itemBtn.addEventListener('click', function(){
        alert('Este botão "Inovar agora" é meramente ilustrativo. O projeto associado a esta demonstração é fictício e não possui funcionalidades ativas ;)');

    })
})

let callUsBtn = document.querySelectorAll('.mainbtn--item')[0]

callUsBtn.addEventListener('click', scrollToDiv)

function scrollToDiv(){
    const divTarget = document.getElementById('ourcontact');
    divTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  
      });  
}

let submitbtn = document.getElementById('submitbtn');
let form = document.getElementById("ourcontact");



submitbtn.addEventListener('click', function(event){
    event.preventDefault()
    if(sucessSubmit()){
        let inputName = document.getElementById('username').value
        showModal(inputName)
        formClean()
    }else{
        alert('Por favor, preencha todos os campos do formulário.');
    }
})
    

function formClean(){
    form.reset()
}

function showModal(name){
    let modal = document.getElementById("submitmodal");
    let modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `Olá, <strong>${name}!</strong> Agradecemos pelo seu interesse! No entanto, gostaríamos de informar que este projeto representa apenas uma empresa fictícia, e, por esse motivo, o formulário preenchido não será encaminhado ou processado`;

    modal.style.display = "block";
}

function fecharModal() {
    let modal = document.getElementById("submitmodal");

    modal.style.display = "none";
}

function sucessSubmit(){
    let campos = document.querySelectorAll('.contact-form input, .contact-form textarea');

    return Array.from(campos).every(campo => campo.value.trim() !== '');
}



 

