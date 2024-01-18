// check even or odd 
function checkParams() {
    throw new Error("You must provide params!")
}
const checkEvenOrOdd = (num = checkParams()) => {

    if (num % 2 == 0) {
        console.log(`You entered the number ${num} which is even!`)
    } else {
        console.log(`You entered the number ${num} which is odd!`)
    }
}
// checkEvenOrOdd(2)

//  calculate the factorial

const calculateFactorial = (num) => {
    if (num === 0 || num === 1) {
        return 1
    }
    for (let i = num - 1; i > 0; i--) {
        num = num * i;
    }
    console.log(`Your fatorial number is ${num}`)
}
// calculateFactorial(5)
