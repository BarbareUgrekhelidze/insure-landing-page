const button = document.querySelector('.menu-btn').addEventListener('click', open);
const closeBtn = document.querySelector('.close-btn').addEventListener('click', close); 

function open(e){
    document.querySelector('.menu').classList.add('show');
    document.querySelector('.close-btn').classList.add('show');
    document.querySelector('.menu-btn').classList.add('disappear');
}

function close(e){
    document.querySelector('.menu').classList.remove('show');
    document.querySelector('.close-btn').classList.remove('show');
    document.querySelector('.menu-btn').classList.remove('disappear');
}