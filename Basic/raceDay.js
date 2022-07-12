let raceNumber = Math.floor(Math.random() * 1000); //0-999
const registerEarly = true
const runnerAge = 18
if(registerEarly === true && runnerAge > 18){
  raceNumber += 1000
}
if(registerEarly === true && runnerAge > 18){
  console.log(`Runner number ${raceNumber} will start at 9:30 am.`)
}
else if(runnerAge > 18 && registerEarly === false){
  console.log(`Runner number ${raceNumber} will start at 11:00 am.`)
}
else if (runnerAge < 18){
  console.log(`Runner ${raceNumber} run at 12:30 pm (regardless of registration)`)
}
else{
  console.log(`Runner ${raceNumber} please approach the registration desk! Thank you.`)
}
