# 🌱 Soybean Seed Classification & Oil Yield Estimation

A deep learning–powered web application that classifies soybean seeds and estimates their potential oil yield based on seed type and batch weight. This project combines **CNN-based image classification** with a **Flask web interface**, offering an interactive and educational tool for agriculture and research use.

---

## 🚀 Project Overview

The goal of this project is to analyze soybean seed quality and predict their oil yield percentage. Using a Convolutional Neural Network (CNN), the system classifies images of soybean seeds into categories such as:

- **Intact**
- **Broken**
- **Immature**
- **Skin-Damaged**
- **Spotted**

Based on the classification, an **oil yield calculator** estimates the expected oil content for a given batch weight.

---

## 🧠 Features

- 🟩 **Soybean Seed Classification:**  
  CNN model trained to classify soybean seed images with high accuracy.

- ⚙️ **Oil Yield Calculator:**  
  Automatically estimates oil yield (%) based on seed type and weight input.

- 💻 **Interactive Web UI:**  
  Developed using HTML, CSS, and JavaScript with smooth animations and a clean layout.

- 🔗 **Backend Integration:**  
  Flask handles model loading, prediction, and API routing.

- 📊 **Informative Output:**  
  Displays expected oil content range with reasoning for each seed category.

---

## 🧰 Tech Stack

| Component | Technology |
|------------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | Flask (Python) |
| **Model** | TensorFlow / Keras (CNN Model `.h5`) |
| **Database (optional)** | SQLite or JSON for logs |
| **Tools** | NumPy, OpenCV, Matplotlib |
| **Deployment (optional)** | Render / Docker / Heroku |

---

## 🔬 Oil Yield Information

| Soybean Type | Expected Oil Content (% by weight) | Reasoning |
|---------------|------------------------------------|------------|
| Intact | 18–21% (Highest) | Fully mature and undamaged seeds retain maximum oil. |
| Broken | 17–20% | Slight loss due to physical damage; oil % stays similar. |
| Immature | 12–16% (Lowest) | Immature seeds haven’t fully developed storage lipids. |
| Skin-Damaged | 16–19% | Reduced due to exposure and moisture absorption. |
| Spotted | 17–20% | Cosmetic spots don’t drastically lower oil; slight quality drop possible. |

> **Key Insight:** Intact soybeans are ideal for oil extraction. Physical damage affects oil quality more than percentage.

---

## ⚙️ How to Run the Project Locally

1. **Clone this repository:**
   ```bash
   git clone https://github.com/<your-username>/soybean-oil-yield.git
   cd soybean-oil-yield
