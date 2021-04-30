let nn;
//xTest Data
let training_data = [
    {
        inputs: [0,1],
        targets: [1]
    },
    {
        inputs: [1,0],
        targets: [1]
    },
    {
        inputs: [0,0],
        targets: [0]
    },

    {
        inputs: [1,1], 
        targets: [0]
    },
];

function setup() {
    //Test Data
    nn = new NeuralNetwork(2, 2, 1);
    for (let i = 0; i < 50000; i++) {
        let data = random(training_data);
        nn.train(data.inputs, data.targets);
    }

    console.log(nn.feedforward([1,0]));
    console.log(nn.feedforward([0,1]));
    console.log(nn.feedforward([1,1]));
    console.log(nn.feedforward([0,0]));
    createCanvas(400, 400);
}

function draw() {

    background(0)

    for (let i = 0; i < 1000; i++) {
        let data = random(training_data);
        nn.train(data.inputs, data.outputs);
    }

    let resolution = 10;
    let cols = width / resolution;
    let rows = height / resolution;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            fill(random(255));
            rect(i*resolution,j*resolution,resolution, resolution)
        }
    }
}