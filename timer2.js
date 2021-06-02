const readline = require('readline');

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = (time) => { 
  for (const bit of time) {
    if(bit > 0) {
      setTimeout(() => {console.log(`ping at ${bit} seconds`)}, bit * 1000);
    }
  }
};

readL.on('SIGINT', () => {
  readL.close();
  console.log('\nThank you for using my timer!');
});

readL.question('please input number from 1-9 ', (input) => {
  if (input < 0 || input > 9){
    console.log('please input correct numer');
    readL.close();
  }
  else { 
    console.log(`Setting timer for ${input} seconds.`);
    timer(input);
    readL.close();
  }
});




