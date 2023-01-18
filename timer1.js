

const numbers = process.argv.slice(2)

const alarm = function (times) {
  
  for (const time of times) {
  
    setTimeout(() => {

      process.stdout.write("\x07");

      console.log("beep");


    }, time * 1000)
  }
}

alarm(numbers)

console.log(numbers)

// node timer1.js 10 3 5 15 9 

// This will make it beep at:
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds




// console.log("\x07");
