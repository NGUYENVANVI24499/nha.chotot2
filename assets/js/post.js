const seclect = document.querySelector('.selected');
const close1 = document.querySelector('.close');
const optionsContainer = document.querySelector('.select-box2')

const optionList = document.querySelectorAll('.option');

seclect.addEventListener("click",()=>{
    optionsContainer.classList.toggle("active");
});
close1.addEventListener("click",()=>{
    optionsContainer.classList.toggle("active");
});



optionList.forEach(o=>{
    o.addEventListener("click",()=>{
        seclect.innerHTML =o.querySelector("label").innerHTML;
        optionsContainer.classList.toggle("active");
    });
});