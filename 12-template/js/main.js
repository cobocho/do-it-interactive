const $frame = document.querySelector("section");
const $lists = $frame.querySelectorAll("article");

const deg = 360 / $lists.length;

$lists.forEach((item, idx) => {
  item.style.transform = `rotate(${deg * idx}deg) translateY(-100vh)`;

  const $pic = item.querySelector(".pic");
  $pic.style.backgroundColor = "black";
  $pic.style.backgroundImage = `url(./img/member${idx + 1}.jpg)`;

  const $play = document.querySelector(".play");
  const $pause = document.querySelector(".pause");
  const $load = document.querySelector(".load");

  $play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").play();
  });

  $pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });

  $load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    const audio = e.target.closest("article").querySelector("audio");
    audio.load();
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
  });
});

const $prev = document.querySelector(".btnPrev");
const $next = document.querySelector(".btnNext");

let seq = 0;

$prev.addEventListener("click", () => {
  seq++;
  $frame.style.transform = `rotate(${deg * seq}deg)`;
});

$next.addEventListener("click", () => {
  seq--;
  $frame.style.transform = `rotate(${deg * seq}deg)`;
});
