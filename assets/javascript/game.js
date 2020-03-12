function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let tot = 0;
let goal = 0;
let wins = 0;

function init() {
  goal = getRandom(20, 51);

  $("#goal1").append("Goal Weight: " + goal + "g");

  //
  console.log(goal);
  //

  tot = 0;

  $("#total").append("Total Weight: " + total + "g");
  $("#total").empty();

  diamond = getRandom(1, 11);
  emerald = getRandom(1, 11);
  gold = getRandom(1, 11);
  iron = getRandom(1, 11);

  return [diamond, emerald, gold, iron];
}

function game(ores) {
  console.log(tot);
  $("#diamond").click(function() {
    tot += parseInt(ores[0]);
    console.log(tot);
    getState();
    getTotal();
  });

  $("#emerald").click(function() {
    tot += ores[1];
    console.log(tot);
    getState();
    getTotal();
  });

  $("#gold").click(function() {
    tot += ores[2];
    console.log(tot);
    getState();
    getTotal();
  });

  $("#iron").click(function() {
    tot += ores[3];
    console.log(tot);
    console.log(getState());
    getTotal();
  });
}

function getState() {
  console.log("tot:" + tot + " goal:" + goal);
  if (tot === goal) {
    $("#goal1").empty();
    console.log("you win!");
    ores = init();
    game(ores);
    wins += 1;
    $("#wins").append("Wins: " + wins);
  } else if (tot > goal) {
    $("#goal1").empty();
    console.log("you loose :(");
    ores = init();
    game(ores);
  }
}

function getTotal() {
  $("#total").empty();
  $("#total").append("Total Weight: " + tot + "g");
}

ores = init();
game(ores);
