function drawHeart(radius) {
  let heart = '';
  for (let y = -radius; y <= radius; y++) {
    let row = '';
    for (let x = -radius; x <= radius; x++) {
      let x2 = x / radius;
      let y2 = y / radius;
      let d = x2 * x2 + y2 * y2;
      if (d <= 1) {
        row += '❤️'; // Heart symbol
      } else {
        row += ' ';
      }
    }
    heart += row + '\n';
  }
  console.clear(); // Clear the console for animation effect
  console.log(heart);
}

const maxRadius = 15;
let radius = 0;

function animateHeartDrawing() {
  if (radius <= maxRadius) {
    drawHeart(radius);
    radius++;
    setTimeout(animateHeartDrawing, 100); // Adjust the animation speed
  }
}

animateHeartDrawing();
