
async function predict() {
    model = await tf.loadLayersModel('./model.json');
    const prediction = model.predict('./0.jpg'); // Here send a img to the model.
    console.log(prediction)
}



