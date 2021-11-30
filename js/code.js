alert('سيتم تشغيل الموقع قريبا نعدكم بدروس إحترافية ');
const botona = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');
const openBtn = document.querySelector('.menu');

botona.addEventListener('click', function(){
    navMenu.classList.add('visible')
})

openBtn.addEventListener('click', function(){
    navMenu.classList.remove('visible');
})