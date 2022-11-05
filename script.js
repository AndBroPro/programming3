var matrix = [

];
var grassArr = [];
var grassEatr = []

 
var side = 120;

function setup() {
    for(let i = 0; i < 15; i++){
        matrix[i] = []
        for(let j = 0; j < 15; j++){
            matrix[i][j] = random([0, 1])
            if(i == 10 && j == 10){
                matrix[i][j] = 2
            }
        }
    }
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                let gr = new Grass(j, i, 1);
                grassArr.push(gr); 
            } else if (matrix[i][j] === 2) {
                let grEa = new GrassEater(j, i, 2);
                grassEatr.push(grEa); 
            }
        }
    }
//console.log(grassEatr);
 
    
}

function draw() {
console.log(grassArr)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }

            rect(x * side, y * side, side, side);


            fill("blue")
            text(x + " " + y, x * side + side / 2, y * side + side / 2)
        }
    }

    
   
   for(var i in grassArr){
      grassArr[i].mul();
    }
    for(var i in grassEatr){
    
     grassEatr[i].eat();
  
   }
}