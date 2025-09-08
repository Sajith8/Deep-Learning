document.addEventListener("DOMContentLoaded", () => {
  const predictBtn = document.getElementById("predictBtn");
  const imageUpload = document.getElementById("imageUpload");
  const imagePreview = document.getElementById("imagePreview");
  const removeBtn = document.getElementById("removeBtn");
  const predictionResult = document.getElementById("predictionResult");
  const sections = document.querySelectorAll("section");
  const aboutSection = document.querySelector(".about-container");

  /* =====================
     Image Preview
  ===================== */
  imageUpload.addEventListener("change", () => {
    const file = imageUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        imagePreview.src = reader.result;
        imagePreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  /* =====================
     Predict Button
  ===================== */
  predictBtn.addEventListener("click", async () => {
  const file = imageUpload.files[0];
  if (!file) {
    predictionResult.textContent = "Please upload an image first!";
    predictionResult.style.color = "#e74c3c";
    return;
  }

  const formData = new FormData();
  formData.append("image", file);

  predictionResult.textContent = "Predicting...";
  predictionResult.style.color = "#000";

  try {
    const response = await fetch("/predict", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.prediction) {
      predictionResult.textContent = `Predicted Category: ${data.prediction}`;
      predictionResult.style.color = "#27ae60";
    } else {
      predictionResult.textContent = "Prediction failed.";
      predictionResult.style.color = "#e74c3c";
    }
  } catch (error) {
    predictionResult.textContent = "Error occurred while predicting.";
    predictionResult.style.color = "#e74c3c";
  }
});


  /* =====================
     Remove Button
  ===================== */
  removeBtn.addEventListener('click', () => {
    imageUpload.value = '';
    imagePreview.src = '';
    imagePreview.style.display = "none";
    predictionResult.textContent = '';
  });

  /* =====================
     Reveal Sections on Scroll
  ===================== */
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  const revealAbout = () => {
    const triggerBottom = window.innerHeight * 0.85;
    const sectionTop = aboutSection.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      aboutSection.classList.add("visible");
    }
  };

  window.addEventListener("scroll", () => {
    revealOnScroll();
    revealAbout();
  });

  // Run once on load
  revealOnScroll();
  revealAbout();

  
});

