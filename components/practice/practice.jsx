import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

export default function ImageClassifier() {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const loadModel = async () => {
    try {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    } catch (error) {
      console.error("Error loading model:", error);
    }
  };

  const classifyImage = async (imageElement) => {
    if (!model) {
      console.error("Model not loaded");
      return;
    }
    const imgTensor = tf.browser.fromPixels(imageElement).toFloat();
    const resizedImgTensor = tf.image.resizeBilinear(imgTensor, [224, 224]);
    const normalizedImgTensor = resizedImgTensor.div(255.0);
    const prediction = await model.classify(normalizedImgTensor);
    setPredictions(prediction);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      classifyImage(img);
    };
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {predictions.map((pred, index) => (
        <div key={index}>
          <p>{pred.className}</p>
          <p>{pred.probability.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
