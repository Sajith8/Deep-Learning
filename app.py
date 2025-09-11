from flask import Flask, request, jsonify, render_template
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os
from PIL import Image

app = Flask(__name__)
model = load_model("soyabean_seed_classification_model.h5")  # Load your model

# Map indices to categories (replace with your actual class names)
class_names = ['Broken soybeans', 'Immature soybeans', 'Intact soybeans', 'Skin-damaged soybeans', 'Spotted soybeans']

@app.route('/')
def index():
    return render_template("index.html")  # Your HTML file

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    try:
        # Open image
        img = Image.open(file)

        # Get model input shape dynamically
        input_shape = model.input_shape  # e.g., (None, 100, 100, 3)
        height, width, channels = input_shape[1], input_shape[2], input_shape[3]

        # Convert color mode
        if channels == 1:
            img = img.convert('L')  # grayscale
        else:
            img = img.convert('RGB')  # 3 channels

        # Resize
        img = img.resize((width, height))
        img_array = np.array(img).astype('float32') / 255.0

        # Expand dims for batch
        if channels == 1:
            img_array = np.expand_dims(img_array, axis=-1)
        img_array = np.expand_dims(img_array, axis=0)

        # Predict
        prediction = model.predict(img_array)
        predicted_class = class_names[np.argmax(prediction)]

        return jsonify({'prediction': predicted_class})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

