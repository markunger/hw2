background(255);
colorMode(HSB, 8, 100, 100, 1);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 255, 255);
  ellipse(random(width),random(height), random(80, 40));
}
