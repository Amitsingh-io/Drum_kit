function playSound(e)
{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; //stop the function rom running all together;
    audio.currentTime=0;// rewind to the start;
    audio.play();
    key.classList.add('playing');
    //to delay
    setTimeout(function(){
        key.classList.remove('playing');
    },300);//3000 =3 ses
}

window.addEventListener('keydown',playSound);
