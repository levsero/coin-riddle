rollAnswers = [];
turnAnswers = [];
for (let t = 0; t < 10000000; t++) {
  values = [3, 3, 3, 3, 3, 3];
  rollCount = 0;
  turnCount = 0;
  while (true) {
    values = values.filter(v => v > 0);
    if (values.length === 1) {
      rollAnswers.push(rollCount);
      turnAnswers.push(turnCount);
      break;
    }
    for (let p = 0; p < values.length; p++) {
      let a = values.filter(v => v > 0).length;
      if (a === 1) {
        break;
      }
      turnCount++;
      for (let d = 0; d < 3; d++) {
        if (values[p] === 0) break;
        values[p]--;
        rollCount++;
        switch (Math.floor(Math.random() * 3)) {
          case 0: {
            if (p === 0) {
              values[a - 1]++;
            } else {
              values[p - 1]++;
            }
            break;
          }
          case 1: {
            values[(p + 1) % a]++;
            break;
          }
          default:
            break;
        }
      }
    }
  }
}
