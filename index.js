const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(
(accumulator,currentValue ) =>accumulator + currentValue,);

//let initialValue = 4;
//for (const product of batteryBatches)

console.log(totalBatteries);