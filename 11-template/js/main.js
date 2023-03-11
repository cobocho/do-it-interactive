const $articles = document.querySelectorAll("article");

$articles.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    e.target.querySelector("video").play();
  });

  item.addEventListener("mouseleave", (e) => {
    e.target.querySelector("video").pause();
  });

  item.addEventListener("click", (e) => {
    const title = e.target.closest("article").querySelector("h2").innerText;
    const txt = e.target.closest("article").querySelector("p").innerText;
    const vid = e.target
      .closest("article")
      .querySelector("video")
      .getAttribute("src");

    const $aside = document.querySelector("aside");
    $aside.className = "on";

    $aside.querySelector("h1").innerText = title;
    $aside.querySelector("p").innerText = txt;
    $aside.querySelector("video").setAttribute("src", vid);

    $aside.querySelector("span").addEventListener("click", () => {
      console.log("close");
      $aside.className = "";
    });
  });
});
