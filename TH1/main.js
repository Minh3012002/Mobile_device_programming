// bai 1
// let markMass = 78; 
// let markHeight = 1.69; 

// let johnMass = 92; 
// let johnHeight = 1.95; 

// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);

// let markHigherBMI = markBMI > johnBMI;

// console.log("Mark's BMI is " + markBMI);
// console.log("John's BMI is " + johnBMI);

// if (markHigherBMI) {
//   console.log("Mark has a higher BMI than John.");
// } else {
//   console.log("John has a higher BMI than Mark.");
// }

// bai 2
// let markMass = 78; 
// let markHeight = 1.69; 

// let johnMass = 92; 
// let johnHeight = 1.95; 

// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
//   } else if (johnBMI > markBMI) {
//     console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
//   } else {
//     console.log("Mark and John have the same BMI.");
//   }

// bai 3
// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];

// function calculateAverageScore(scores) {
//   const sum = scores.reduce((total, score) => total + score, 0);
//   return sum / scores.length;
// }

// const dolphinsAverage = calculateAverageScore(dolphinsScores);
// const koalasAverage = calculateAverageScore(koalasScores);

// console.log(`Dolphins' average score: ${dolphinsAverage.toFixed(2)}`);
// console.log(`Koalas' average score: ${koalasAverage.toFixed(2)}`);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log("Dolphins win the competition!");
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//   console.log("Koalas win the competition!");
// } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
//   console.log("It's a draw!");
// } else {
//   console.log("No team wins the trophy.");
// }

// bai 4
// let bill = 275;

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// let totalValue = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`);

// bai 5
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(85, 90, 89);
// const avgKoalas = calcAverage(88, 91, 110);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
//   } else {
//     console.log("No team wins!");
//   }
// };

// console.log("Data 1:");
// checkWinner(avgDolphins, avgKoalas);

// const avgDolphins2 = calcAverage(75, 85, 95);
// const avgKoalas2 = calcAverage(90, 80, 85);

// console.log("\nData 2:");
// checkWinner(avgDolphins2, avgKoalas2);

// bai 6
// Bước 1: Tạo hàm 'calcTip' để tính tiền tip dựa trên quy tắc đã cho
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];

// const tips = bills.map((bill) => calcTip(bill));

// const totals = bills.map((bill, index) => bill + tips[index]);

// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Totals:", totals);

// bai 7
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
// } else {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)}).`);
// }

// bai 8
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(bills[i] + tip);
// }

// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// const average = calcAverage(totals);

// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Totals:", totals);
// console.log("Average total value:", average.toFixed(2));

// bai 9
function printForecast(arr) {
    let forecastString = "";
    for (let i = 0; i < arr.length; i++) {
      forecastString += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(forecastString);
  }

  console.log("Data 1:");
  printForecast([17, 21, 23]);
  
  console.log("\nData 2:");
  printForecast([12, 5, -5, 0, 4]);
  