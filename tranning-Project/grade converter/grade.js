let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    if (percent >= 90) {
        return ` you got a A (${percent.toFixed(1)}%)`
    } else if (percent >= 80) {
        return ` you got a B (${percent.toFixed(1)}%)`
    } else if (percent >= 70) {
        return ` you got a C (${percent.toFixed(1)}%)`
    }else if (percent >= 60) {
        return ` you got a D (${percent.toFixed(1)}%)`
    }else {
        return ` you got F (${percent.toFixed(1)}%)`
    }
}
console.log(gradeCalc(427, 600)); 


let grade = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let gradeLetter = ''
    if (percent >= 90) {
        gradeLetter = 'A'
    } else if (percent >= 80) {
        gradeLetter = 'B'
    } else if (percent >= 70) {
        gradeLetter = 'C'
    }else if (percent >= 60) {
        gradeLetter = 'D'
    }else {
        gradeLetter = 'F'
    }
    return ` you got a ${gradeLetter} ${percent.toFixed(1)}%`
}
console.log(grade(427, 600)); 