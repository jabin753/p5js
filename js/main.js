function bresenhamPovar(x1, y1, x2, y2) {
  let y = y1;
  //Método Bresenham:
  let dy = y2 - y1,
    dx = x2 - x1;
  let e = 0;
  for (x = x1; x <= x2; x++) {
    povar(x, y);

    if (2 * (e + dy) < dx) {
      e += dy;
    } else {
      y++;
      e += dy - dx;
    }
  }
}
function triangulo(points) {
  triangle(
    points[0].x,
    points[0].y,
    points[1].x,
    points[1].y,
    points[2].x,
    points[2].y
  );
  return points;
}
function drawGato(t, s) {
  //Variable para la traslacion
  var tx = t.tx; //default 0
  var ty = t.ty; //default 0

  //Variable para el escalamiento.
  var sx = s.sx; //default 1;
  var sy = s.sy; //default 1;

  //triangulo Oreja izquierda
  stroke(234, 57, 170);
  fill(234, 57, 170);
  var o1x1 = -100;
  var o1y1 = -95;
  var o1x2 = -70;
  var o1y2 = -45;
  var o1x3 = -100;
  var o1y3 = 5;
  triangle(
    sx * (o1x1 + tx),
    sy * (o1y1 + ty),
    sx * (o1x2 + tx),
    sy * (o1y2 + ty),
    sx * (o1x3 + tx),
    sy * (o1y3 + ty)
  );

  //triangulo Oreja derecha
  stroke(243, 112, 56);
  fill(243, 112, 56);
  var o2x1 = -36;
  var o2y1 = -95;
  var o2x2 = -66;
  var o2y2 = -45;
  var o2x3 = -35;
  var o2y3 = 5;
  triangle(
    sx * (o2x1 + tx),
    sy * (o2y1 + ty),
    sx * (o2x2 + tx),
    sy * (o2y2 + ty),
    sx * (o2x3 + tx),
    sy * (o2y3 + ty)
  );

  //cuadrado Cara
  var c1x1 = -68;
  var c1y1 = -46;
  var c1x2 = -35;
  var c1y2 = 4;
  var c1x3 = -68;
  var c1y3 = 60;
  var c1x4 = -100;
  var c1y4 = 4;
  stroke(255, 255, 0);
  fill(255, 255, 0);
  quad(
    sx * (c1x1 + tx),
    sy * (c1y1 + ty),
    sx * (c1x2 + tx),
    sy * (c1y2 + ty),
    sx * (c1x3 + tx),
    sy * (c1y3 + ty),
    sx * (c1x4 + tx),
    sy * (c1y4 + ty)
  );

  //triangulo pata de adelante
  stroke(25, 100, 1);
  fill(255, 100, 1);
  var p1x1 = -31;
  var p1y1 = 4;
  var p1x2 = 70;
  var p1y2 = -50;
  var p1x3 = 20;
  var p1y3 = 130;
  triangle(
    sx * (p1x1 + tx),
    sy * (p1y1 + ty),
    sx * (p1x2 + tx),
    sy * (p1y2 + ty),
    sx * (p1x3 + tx),
    sy * (p1y3 + ty)
  );

  // triangulo Cuerpo
  stroke(88, 138, 77);
  fill(88, 138, 77);
  var cux1 = 72;
  var cuy1 = -52;
  var cux2 = 110;
  var cuy2 = 70;
  var cux3 = 54;
  var cuy3 = 10;
  triangle(
    sx * (cux1 + tx),
    sy * (cuy1 + ty),
    sx * (cux2 + tx),
    sy * (cuy2 + ty),
    sx * (cux3 + tx),
    sy * (cuy3 + ty)
  );

  //triangulo Pata atras
  stroke(255, 165, 0);
  fill(255, 165, 0);
  var p2x1 = 74;
  var p2y1 = -50;
  var p2x2 = 175;
  var p2y2 = 4;
  var p2x3 = 120;
  var p2y3 = 130;
  triangle(
    sx * (p2x1 + tx),
    sy * (p2y1 + ty),
    sx * (p2x2 + tx),
    sy * (p2y2 + ty),
    sx * (p2x3 + tx),
    sy * (p2y3 + ty)
  );

  //cuadrado de la Cola
  var cox1 = 220;
  var coy1 = -40;
  var cox2 = 262;
  var coy2 = -40;
  var cox3 = 220;
  var coy3 = 2;
  var cox4 = 178;
  var coy4 = 2;
  stroke(72, 41, 225);
  fill(72, 41, 225);
  quad(
    sx * (cox1 + tx),
    sy * (coy1 + ty),
    sx * (cox2 + tx),
    sy * (coy2 + ty),
    sx * (cox3 + tx),
    sy * (coy3 + ty),
    sx * (cox4 + tx),
    sy * (coy4 + ty)
  );
}
//MAIN:

function setup() {
  // Create the canvas
  createCanvas(2900, 2000);
  background(255);

  translate(width / 2, height / 2);
  drawGato(
    {
      tx: 25,
      ty: 35
    },
    {
      sx: 1,
      sy: 1
    }
  );
  drawGato(
    {
      tx: -60,
      ty: -60
    },
    {
      sx: 7,
      sy: 6
    }
  );
}
