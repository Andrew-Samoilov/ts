console.log(` - * 6 kuy * Traffic Lights - one car * -`);

function trafficLights(road: string, n: number): string[] {
  let carCorrdinate = 0;
  let roadState = road.split('');

  let rezult = [road];

  console.log(roadState.join(''));

  function drawRoad(state: string[], carCorrd: number = 0) {
    let res = [...state];

    if (carCorrd >= 0) {
      res[carCorrd] = 'C';
    }

    res.forEach((item, index, arr) => {
      arr[index] = item.slice(0, 1);
    });
    return res.join('');
  }

  for (let i = 0; i < n; i++) {

    for (let index = 0; index < roadState.length; index++) {
      switch (roadState[index]) {
        case 'C':
          // console.log('car', index);
          roadState[index] = '.';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'R':
          // console.log('red', index);
          roadState[index] = 'R1';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'R1':
          // console.log('red', index);
          roadState[index] = 'R2';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'R2':
          // console.log('red', index);
          roadState[index] = 'R3';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'R3':
          // console.log('red', index);
          roadState[index] = 'R4';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'R4':
          // console.log('red', index);
          roadState[index] = 'G';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        // case 'OR':
        //     // console.log('orange', index);
        //     roadState[index] = 'G';
        //     // console.log(`roadState[${index}]=${roadState[index]}`);
        //     break;
        case 'G':
          // console.log('green', index);
          roadState[index] = 'G1';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'G1':
          // console.log('green', index);
          roadState[index] = 'G2';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'G2':
          // console.log('green', index);
          roadState[index] = 'G3';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'G3':
          // console.log('green', index);
          roadState[index] = 'G4';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'G4':
          // console.log('green', index);
          roadState[index] = 'OG';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'OG':
          // console.log('green', index);
          roadState[index] = 'R';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        case 'OR':
          // console.log('green', index);
          roadState[index] = 'R1';
          // console.log(`roadState[${index}]=${roadState[index]}`);
          break;
        default:
          break;
      }
    }

    // console.log(`car coord ${carCorrdinate},road length ${road.length}`);

    if ((carCorrdinate + 1) >= road.length) {
      carCorrdinate = -2;
    }

    switch (roadState[carCorrdinate + 1]) {
      case '.':
      case 'G':
      case 'G1':
      case 'G2':
      case 'G3':
      case 'G4':
      case 'OR':
        carCorrdinate++;
        break;
      default:
        break;
    }
    // console.log(roadState.join(''), 'state');
    console.log(i, drawRoad(roadState, carCorrdinate), carCorrdinate);

    rezult.push(drawRoad(roadState, carCorrdinate));
  }

  return rezult;
}

let sim = [
  "C...R............G......",  // 0
  ".C..R............G......",  // 1
  "..C.R............G......",  // 2
  "...CR............G......",  // 3
  "...CR............G......",  // 4
  "....C............O......",  // 5
  "....GC...........R......",  // 6
  "....G.C..........R......",  // 7
  "....G..C.........R......",  // 8
  "....G...C........R......",  // 9
  "....O....C.......R......"   // 10
];

// console.log(sim);

// let test = trafficLights("C...R............G......", 10);
// let test = trafficLights("CG...", 10);
let test = trafficLights("C....G........R...", 30);
console.log(test);
