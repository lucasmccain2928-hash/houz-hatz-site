// Tab switching + fade animations
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.dataset.tab;
    document.querySelectorAll(".tab-section").forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) sec.classList.add("active");
    });

    const testimonials = document.querySelector(".testimonials");
    if (target === "about" && testimonials) {
      setTimeout(() => testimonials.classList.add("show"), 200);
    } else if (testimonials) {
      testimonials.classList.remove("show");
    }

    const socialSection = document.getElementById("social");
    if (target === "social" && socialSection) {
      setTimeout(() => socialSection.classList.add("show-social"), 200);
    } else if (socialSection) {
      socialSection.classList.remove("show-social");
    }
  });
});

// Gallery Loader
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery-grid");
  const imagesFolder = "images/";
  const imageFiles = ["gutter.jpg", "roof_shingle.jpg", "siding.jpg", "wind_damage.jpg"];

  imageFiles.forEach(file => {
    const img = document.createElement("img");
    img.src = `${imagesFolder}${file}`;
    img.alt = file;
    gallery.appendChild(img);
  });

  const testimonials = document.querySelector(".testimonials");
  if (testimonials) setTimeout(() => testimonials.classList.add("show"), 300);

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Your request has been saved. We'll contact you soon.");
    form.reset();
  });
});
