function bresenhamPoint(x1, y1, x2, y2){
    let y = y1;
    //Método Bresenham:
    let dy = y2 - y1, dx = x2 - x1;
    let e = 0;
    for (x = x1; x <= x2; x++){
      point(x,y);
      
      if((2*(e+dy)) < dx){
        e += dy;
      }
      else{
        
        y++;
        e += (dy- dx);
      }
    }
}


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    bresenhamPoint(100,100,200,200);
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
