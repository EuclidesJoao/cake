let sections =document.querySelectorAll('section');
const header = document.querySelector('.header');
const chat = document.querySelector('.chat');
const form = document.querySelector('.formulary');
const closeForm = document.querySelector('.closeForm');

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 60){
        header.classList.add('header-scrolled');
    }else if (window.screenY < 60){
        header.classList.remove('header-scrolled');
    }
})

window.onscroll =()=>{
    sections.forEach( sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;

        if(top > offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}

chat.addEventListener('click', () =>{
    chat.classList.add('active');

    if (chat.classList.contains('active')){
        form.classList.toggle('active');
    } 
})
closeForm.addEventListener('click', ()=>{
    closeForm.classList.add('active');

    if (closeForm.classList.contains('active')) {
        form.classList.remove('active');
    }
})