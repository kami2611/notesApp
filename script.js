const bgChangeButton = document.getElementById('backGroundChangeAlert');
bgChangeButton.addEventListener('click', ()=>{
    alert('backGround changed alert');
});
const header = document.getElementById('header');
header.addEventListener('click', ()=>{
    header.classList.add('header-class');
})