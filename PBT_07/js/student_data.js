const students = [

    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },

];

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = students[0];
let minStudent = students[0];

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

let maleTotal = 0;
let femaleTotal = 0;

let maleCount = 0;
let femaleCount = 0;

console.log("STT | Tên | TB | Xếp loại");

for(let i = 0; i < students.length; i++){

    let student = students[i];

    let avg = student.math * 0.4 +
              student.physics * 0.3 +
              student.cs * 0.3;

    avg = avg.toFixed(1);

    let rank = "";

    if(avg >= 8){

        rank = "Giỏi";
        gioi++;

    } else if(avg >= 6.5){

        rank = "Khá";
        kha++;

    } else if(avg >= 5){

        rank = "Trung bình";
        trungBinh++;

    } else {

        rank = "Yếu";
        yeu++;

    }

    student.avg = Number(avg);

    console.log(
        (i + 1) + " | " +
        student.name + " | " +
        avg + " | " +
        rank
    );

    if(student.avg > maxStudent.avg || maxStudent.avg === undefined){

        maxStudent = student;

    }

    if(student.avg < minStudent.avg || minStudent.avg === undefined){

        minStudent = student;

    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;

    if(student.gender === "M"){

        maleTotal += student.avg;
        maleCount++;

    } else {

        femaleTotal += student.avg;
        femaleCount++;

    }

}

console.log("\n--- Thống kê ---");

console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

console.log("\nSV điểm cao nhất:", maxStudent.name, "-", maxStudent.avg);

console.log("SV điểm thấp nhất:", minStudent.name, "-", minStudent.avg);

console.log("\nTB môn Toán:", (totalMath / students.length).toFixed(1));

console.log("TB môn Lý:", (totalPhysics / students.length).toFixed(1));

console.log("TB môn CS:", (totalCS / students.length).toFixed(1));

console.log("\nTB nam:", (maleTotal / maleCount).toFixed(1));

console.log("TB nữ:", (femaleTotal / femaleCount).toFixed(1));