window.addEventListener("keydown", playSound);

function playSound(e) {
  //console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);

  btn.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  
}

const keys = Array.from(document.querySelectorAll('.btn'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    //if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
