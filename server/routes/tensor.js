const express = require("express");
const router = express.Router();
const tf = require("@tensorflow/tfjs");

router.post("/", async (req, res) => {
  // Tokenization
  const tokenizer = new tf.data.StringTokenizer();
  tokenizer.addData(productDescriptions);
  const tokenizedData = tokenizer.tokenize(productDescriptions);

  // Word embeddings
  const embeddingLayer = tf.layers.embedding({
    inputDim: tokenizer.getVocabularySize(),
    outputDim: 10, // Adjust the output dimension as needed
    inputLength: tokenizedData.shape[1],
  });

  const embeddedData = embeddingLayer.apply(tokenizedData);

  // Convert tensors to JSON for sending in response
  const processedData = await embeddedData.array();
  return processedData;
});

module.exports = router;
