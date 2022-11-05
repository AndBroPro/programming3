class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.directions = [];
        this.multiply = 0
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
           
        }
        return found;
    }
    
    eat() {
        this.multiply++
        
        var grassCells = this.chooseCell(1);
        var newCell = random(grassCells);
        
        if(newCell){
          
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
              this.energy += 2 
             // console.log("eat = " + this.energy)
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1); 
                    break;
                } 
    
            }
            if(this.energy >= 35){
                this.mul()
            }
        }else{
            this.move()
        }
    }
    move(){
        
         
        let grassCells = this.chooseCell(random([0,1]))
        let newCell = random(grassCells)

        if(newCell && this.energy >= 0){
           
            let NEWX = newCell[0]
            let NEWY = newCell[1]
            matrix[NEWY][NEWX] = 2
            matrix[this.y][this.x] = 0
            this.x = NEWX
            this.y = NEWY
             this.energy--
            // console.log("move = " + this.energy)
        }else{
            this.dead()
        }
        
    }
    dead(){
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0
            
            for(let i in grassEatr){
                
                if(this.x == grassEatr[i].x && this.y == grassEatr[i].y){
                
                    grassEatr.splice(i, 1);
                    break;
                }
            }
        }
    }
   mul(){
    
    
       // console.log('saferwerwerwerwerweds')
            this.multiply++;
                var emptyCells = this.chooseCell(random([0,1 ]));
                var newCell = random(emptyCells);
               // console.log(this.multiply)
                if(newCell && this.multiply >= 8){
                    
                    var newX = newCell[0];
                    var newY = newCell[1];
                    matrix[newY][newX] = 2;
        
                    var newGrassEater = new GrassEater(newX, newY, 2)
                    grassEatr.push(newGrassEater);
                    this.multiply = 0;
                }
                this.energy = 10
                
        
    }
   
}
