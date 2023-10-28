let introScore = 200
console.log(`This is a score for intro ${introScore}`)

let gitScore = 180
console.log(`This is a score for git ${gitScore}`)

let jsScore = 230
console.log(`This is a score for js ${jsScore}`)

let total = introScore + gitScore + jsScore
let averageScore = total / 3
console.log(`This is an averageScore ${averageScore}`)

let studentName = "Max"
let studentSurname = "Maksimov"
let studentFullName = studentName + " " + studentSurname
console.log(`Student ${studentFullName} have an averageScore ${averageScore}.`)

let firstLetterName = studentName.slice(0,1)
let student1FullName = firstLetterName + "." + studentSurname
console.log(`Student ${student1FullName} have an averageScore ${averageScore}.`)