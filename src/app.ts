console.log(` - ** 5 kuy * Traffic Lights - multiple cars * -`);

function trafficLights(road: string, n: number): string[] {
    let carCorrdinate: number[] = [];
    let roadState = road.split('');
    let rezult = [road];

    function roadStateInitialization(): void {
        for (let index = 0; index < road.length; index++) {
            if (road[index] === 'C') {
                carCorrdinate.push(index);
                roadState[index] = '.';
            }
        }
        console.log(...carCorrdinate, 'car coordinate');
        console.log(roadState.join(''), `road state`);
    }

    roadStateInitialization();

    function drawRoad(state: string[]) {
        let res = [...state];

        for (let index = 0; index < carCorrdinate.length; index++) {
            res[carCorrdinate[index]] = 'C';
        }

        res.forEach((item, index, arr) => {
            arr[index] = item.slice(0, 1);
        });

        // console.log('draw road',...carCorrdinate);

        return res.join('');
    }

    function traficLightsTicker(): void {
        for (let index = 0; index < roadState.length; index++) {
            switch (roadState[index]) {
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
    }

    for (let i = 0; i < n; i++) {
        traficLightsTicker();

        for (let index = carCorrdinate.length; index > -1; index--) {
            // console.log(`car coord ${carCorrdinate}, road length ${road.length}`);
            if ((carCorrdinate[index] + 1) >= road.length) {
                carCorrdinate[index] = -2; //car disappears
            } else {
                console.log(`roadState[carCorrdinate[${index}]+1]`, carCorrdinate[index] + 1, roadState[carCorrdinate[index] + 1]);
                switch (roadState[carCorrdinate[index] + 1]) {
                    case '.':
                    case 'G':
                    case 'G1':
                    case 'G2':
                    case 'G3':
                    case 'G4':
                        // console.log(i, 'i', ...carCorrdinate);
                        // console.log(index, carCorrdinate.indexOf(index + 1));
                        // if (carCorrdinate.indexOf(index + 1) === -1) {
                        // console.log(index, carCorrdinate.indexOf(index + 1));
                        carCorrdinate[index]++;
                        console.log(`carCorrdinate[${index}] ${carCorrdinate[index]}`);
                        // }
                        break;

                    default:
                        break;
                }
            }
            // console.log(index,...carCorrdinate);
            // console.log(index, roadState.join(''));
        }

        // console.log(roadState.join(''), 'state');
        // console.log( ...carCorrdinate, 'car coordinate');

        rezult.push(drawRoad(roadState));
    }

    return rezult;
}

// let test = trafficLights("CCC.G...R...", 16);
let test = trafficLights("CCR...G...", 7);
console.log(test);
