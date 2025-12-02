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

const updateButton = document.getElementById("lightbox");
const cancelButton = document.getElementById("lightbox-cancel");
const dialog = document.getElementById("lightbox-dialog");
dialog.returnValue = "lightboxClosed";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog opened");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});