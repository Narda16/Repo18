function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (let i = 1; i <= 5; i++) {
    var x = i;
    yield x;
  }
}

function* insideGenerator2() {
  for (let i = 10; i <= 15; i++) {
    var x = i;
    yield x;
  }
}

function* insideGenerator3() {
  for (let i = 6; i <= 9; i++) {
    var x = i;
    yield x;
  }
}
let iterator = myGenerator();

let fifteenArray = [];

for (let i = 0; i < 16; i++) {
  if (i === 15) {
    fifteenArray.push(iterator.next().value + "!");
  } else {
    fifteenArray.push(iterator.next().value + "#,");
  }
}

console.log(...fifteenArray);

module.exports = { fifteenArray, myGenerator };
