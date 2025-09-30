document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("gallery-grid");
  const images = [
    "roof_shingle.jpg",
    "siding.jpg",
    "gutter.jpg",
    "hero.jpg"
  ]; // add any new image filenames here

  images.forEach(img => {
    const imageEl = document.createElement("img");
    imageEl.src = `images/${img}`;
    imageEl.alt = img.split(".")[0];
    galleryGrid.appendChild(imageEl);
  });
});

