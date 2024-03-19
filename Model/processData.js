import { getTokenizedAndEmbeddedData } from "../server/routes/tensor";

export default async function handler(req, res) {
  try {
    // Fetch data from your backend API
    const productDescriptions = await fetch(
      "https://fakestoreapi.com/products"
    );
    const productDescriptionsJson = await productDescriptions.json();

    // Perform tokenization and embedding using TensorFlow.js
    const processedData = await getTokenizedAndEmbeddedData(
      productDescriptionsJson
    );
    res.status(200).json(processedData);
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).json({ error: "Error processing data" });
  }
}
