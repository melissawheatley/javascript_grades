console.log("grades.js is connected");

const scores = [82, 71, 62, 101, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
var grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
}

console.log(scores);

for (let i = 0; i < scores.length; i++) {
    if(scores[i] >= 91 && scores[i] <=100){
        grades.A += 1;
    }else if(scores[i] <= 90 && scores[i] >= 81){
        grades.B += 1;
    }else if(scores[i] <= 80 && scores[i] >= 71){
        grades.C += 1;
    }else if(scores[i] <= 70 && scores[i] >= 61){
        grades.D += 1;
    }else if (scores[i] <=60 && scores[i] >= 0){
        grades.F += 1;
    }else{
        console.log("this is not a grade");
    }
    ;
}
console.log("Grade Totals")
console.log("Total As: ", grades.A);
console.log("Total Bs: ", grades.B); 
console.log("Total Cs: ", grades.C);
console.log("Total Ds: ", grades.D);
console.log("Total Fs: ", grades.F);

console.log("Total Grades", scores.length)

scores.sort(function(a,b){
    return a-b});

console.log(`The lowest grade is ${scores[0]}.`);
console.log(`The highest grade is ${scores[scores.length-1]}.`);


//most common grade

let currentGradeCount = 0;
var gradeCountHigh; 
var newGradeCount = 100;
var gradeCountLow;

for (x in grades){
    if(grades[x] > currentGradeCount){
        gradeCountHigh = [x];
        currentGradeCount = grades[x]
    }else if(grades[x] === currentGradeCount){
        gradeCountHigh.push(x);
    }
    if(grades[x] < newGradeCount){
        gradeCountLow = [x];
        newGradeCount = grades[x]
    }else if(grades[x] === newGradeCount){
        gradeCountLow.push(x);
    }
};

console.log("Most frequent grade", gradeCountHigh);
console.log("Least Frequent Grade: ", gradeCountLow);


