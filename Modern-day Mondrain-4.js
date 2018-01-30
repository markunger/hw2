background(255);
colorMode(HSB);
noStroke();

while(true) {
  stroke(0, 0, 0);
  fill(random(0, 80),255,255);
  rect(random(width), random(height), random(width), random(height));
  x = random(width)
  y = random(height)
  line(x, y, x, (2*y));
  x = random(width)
  y = random(height)
  line(x, y, (2*x), y);
}
