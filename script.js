// Typing letter
const msg = `
Tidak semua hal perlu dirayakan dengan ramai.

Kadang cukup diingat dengan tenang,
dan disimpan sebagai doa kecil.

Semoga kamu selalu baik,
bahkan saat dunia sedang tidak.

Aku nggak tahu kamu akan ingat hari ini sebagai apa.

Tapi semoga,
di tengah hal-hal yang capek,
kamu tetap merasa cukup.

Kalau suatu hari kamu lupa
seberapa berharganya dirimu,
ingat saja:
pernah ada seseorang
yang menyiapkan ini
tanpa diminta.
`;


let i=0;
const el=document.getElementById("text");
if(el){
  (function type(){
    if(i<msg.length){
      el.innerHTML+=msg.charAt(i++);
      setTimeout(type,40);
    }
  })();
}

// Music
const music=document.getElementById("music");
function toggle(){
  music.paused ? music.play() : music.pause();
}

// Confetti
function confetti(){
  for(let i = 0; i < 20; i++){
    let sparkle = document.createElement("span");
    sparkle.innerText = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = "-10px";
    sparkle.style.fontSize = (10 + Math.random() * 12) + "px";
    sparkle.style.opacity = Math.random();
    sparkle.style.pointerEvents = "none";
    document.body.appendChild(sparkle);

    let fall = setInterval(() => {
      sparkle.style.top = (parseInt(sparkle.style.top) + 1) + "px";
      if (parseInt(sparkle.style.top) > window.innerHeight) {
        clearInterval(fall);
        sparkle.remove();
      }
    }, 35);
  }
}
