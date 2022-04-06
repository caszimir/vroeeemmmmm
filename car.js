class Car{
    constructor(carX, carY){
        this.brain = new NeuralNetwork(12, 24, 4);
        let pos = createVector(carX, carY);
    }
    denk() {
        let inputs = [];
        inputs[0]= afstandlijst[0];
        inputs[1]= afstandlijst[1];
        inputs[2]= afstandlijst[2];
        inputs[3]= afstandlijst[3];
        inputs[4]= afstandlijst[4];
        inputs[5]= afstandlijst[5];
        inputs[6]= afstandlijst[6];
        inputs[7]= afstandlijst[7];
        inputs[8]= afstandlijst[8];
        inputs[9]= afstandlijst[9];
        inputs[10]= afstandlijst[10];
        inputs[11]= afstandlijst[11];
        let output = this.brain.predict(inputs);
        let outputvoor = output[1];
        let outputachter = output[2];
        if (outputvoor> 0.5){
            voor();
        }
        if (outputachter>3){
            achter();
        }
        let outputboven = output[0];
        let outputonder = output[3];
        if (outputboven> 0.6){
            up();
        }
        if (outputonder< 0.5){
            down();
        }
        
        
    }
}