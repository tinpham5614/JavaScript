var userName = 'Tin'
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

const userQuestion = 'Please enter the question: Have you ever seen the rain?'
console.log(`${userName} - ${userQuestion}`)

let randomNumber = (Math.floor(Math.random() * 8))
let eightBall = ''
  switch(randomNumber){
      case 0:
        eightBall = 'It is certain'
        console.log(eightBall)
        break;
      case 1:
        eightBall = 'It is decidedly so'
        console.log(eightBall)
        break;
      case 2:
        eightBall = 'Reply hazy try again'
        console.log(eightBall)
        break;
      case 3:
        eightBall = 'Cannot predict now'
        console.log(eightBall)
        break;
      case 4:
        eightBall = 'Do not count on it'
        console.log(eightBall)
        break;
      case 5:
        eightBall = 'My sources say no'
        console.log(eightBall)
        break;
      case 6:
        eightBall = 'Outlook not so good'
        console.log(eightBall)
        break;
      case 7:
        eightBall = 'Signs point to yes'
        console.log(eightBall)
        break;
      default:
        console.log(eightBall)
        break;
  }
