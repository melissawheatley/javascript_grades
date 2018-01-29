console.log("grades.js is connected");

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
var grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
}


for (let i = 0; i < scores.length; i++) {
    if(scores[i] >= 91){
        grades.A += 1;
    }else if(scores[i] <= 90 && scores[i] >= 81){
        grades.B += 1;
    }else if(scores[i] <= 80 && scores[i] >= 71){
        grades.C += 1;
    }else if(scores[i] <= 70 && scores[i] >= 61){
        grades.D += 1;
    }else if(scores[i] <= 60 && scores[i] >= 0){
        grades.F += 1;
    };
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
console.log(`The highest grade is ${scores[13]}.`);


//most common grade
var mostFreq = 0;

var currentGradeCountHigh = 0;

for (x in grades){
    if (mostFreq <= grades[x]) {
        mostFreq = grades[x];
    }
}

// if there is more than one most common grade
for (x in grades) {
    if (mostFreq === grades[x]) {
        console.log("Most Common Grade: ", x);
    }
}

// find the least common grade 

var leastFreq = scores.length;

for (x in grades){
    if (leastFreq >= grades[x]) {
        leastFreq = grades[x];
    }
}

// if there is more than one least common grade
for (x in grades){
    if(leastFreq === grades[x]) {
        console.log("Least Common Grade: ", x);
    }
}

