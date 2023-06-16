export default class Yatzy {

  private static sum(arr: number[]): number {
    return arr.reduce((acc, v) => acc + v, 0);
  }

  static chance(...dice: number[]): number {
    return this.sum(dice);
  }

  static ones(...dice: number[]): number {
    return this.sum(dice.filter(die => die === 1));
  }

  static twos(...dice: number[]): number {
    return this.sum(dice.filter(die => die === 2));
  }

  static threes(...dice: number[]): number {
    return this.sum(dice.filter(die => die === 3));
  }

  static fours(...dice: number[]): number {
    return this.sum(dice.filter(die => die === 4));
  }

  static fives(...dice: number[]): number {
    return this.sum(dice.filter(die => die === 5));
  }

  static sixes(...dice: number[]): number {
    return this.sum(dice.filter(die => die === 6));
  }

  static yatzy(...args: number[]): number {
    const counts = this.countValues(args);
    for (let i = 0; i != 6; i++) if (counts[i] == 5) return 50;
    return 0;
  }

  private static countValues(args: number[]) {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; ++i) {
      counts[args[i] - 1]++;
    }
    return counts;
  }

  static onePair(...args: number[]): number {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; ++i) {
      counts[args[i] - 1]++;
    }
    for (let at = 0; at != 6; at++) if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
    return 0;
  }

  static twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;
    var n = 0;
    var score = 0;
    for (let i = 0; i < 6; i += 1)
      if (counts[6 - i - 1] >= 2) {
        n++;
        score += 6 - i;
      }
    if (n == 2) return score * 2;
    else return 0;
  }

  static fourOfAKind(_1: number, _2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1 - 1]++;
    tallies[_2 - 1]++;
    tallies[d3 - 1]++;
    tallies[d4 - 1]++;
    tallies[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
  }

  static threeOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1 - 1]++;
    t[d2 - 1]++;
    t[d3 - 1]++;
    t[d4 - 1]++;
    t[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
    return 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
    return 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
  }
}
