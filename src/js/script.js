// *** LIGHTBOX ***



const lightBox = document.querySelector("#lightbox");

const lightBoxImage = document.querySelector("#lightbox img");

lightBoxImage?.addEventListener("click", () => lightBox.close());
document.body.addEventListener("click", (evt) => {
  if (!evt.target.matches("[data-full-img]")) return;
  lightBoxImage.src = evt.target.dataset.fullImg;
  lightBox.showModal();
});

lightBox = document.querySelector("#lightbox");

lightBox.showModal();

lightBox.close();

