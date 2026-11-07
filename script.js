let drinks;

async function setup() {
  createCanvas(800, 600);
  drinks = await loadJSON("drinks.json");
  background(255);
  noStroke();

  for (let i = 0; i < drinks.length; i++) {
    let x = 100 + i * 150;

    if (drinks[i].temperature === "hot") {
        fill(220, 40, 40);
    } else {
      fill(60, 140, 255);
    }

    for (let j = 0; j < drinks[i].timesPerWeek; j++) {
      let y = 450 - j * 40;
      circle(x, y, 30);
    }

    fill(0);
    textAlign(CENTER);
    text(drinks[i].name, x, 500);
  }

  textAlign(LEFT);
  textSize(14);
  fill(220, 40, 40);
  circle(60, 40, 20);
  fill(0);
  text("hot", 80, 45);
  fill(60, 140, 255);
  circle(140, 40, 20);
  fill(0);
  text("cold", 160, 45);
  text("1 circle = 1 time this week", 220, 45);
}