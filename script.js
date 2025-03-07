const bgChangeButton = document.getElementById('backGroundChangeAlert');
bgChangeButton.addEventListener('click', ()=>{
    alert('backGround changed alert');
});
document.getElementById('dontchangebackground').addEventListener('click', ()=>{
    alert("nothing happened");
})
const header = document.getElementById('header');
header.addEventListener('click', ()=>{
    header.classList.add('header-class');
});
const timer = document.getElementById('timer');
setInterval(() => {
    const now = new Date();
const formattedDate = now.toLocaleString();
    timer.innerText+=formattedDate , ' ' ; 
    //yet to be added.
}, 1000);
