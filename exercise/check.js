const exercise = require('./exercise');
const transactions = require('./transactions.json');

function main() {
  try {
    const result = exercise.getPredictedAmount(transactions, '2022-04');
    if (!result) {
      return console.log('🟥 Expected `getPredictedAmount` to return something but result is empty');
    }
    if (typeof result !== 'number') {
      return console.log('🟥 Expected `getPredictedAmount` to return a number, got', typeof result)
    }
    if (result !== 9900) {
      return console.log(`🟥 Expected \`getPredictedAmount\` to return 9900, got ${result}`)
    }
    return console.log('🟩 Well done!');
  } catch (error) {
    console.log('🟥 Your code threw an exception:');
    return console.log(error);
  }

}

main();
