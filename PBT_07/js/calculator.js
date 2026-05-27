const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

function calculate(num1, operator, num2){

    if(isNaN(num1) || isNaN(num2)){

        return "Lỗi: Input không phải số";

    }

    switch(operator){

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":

            if(num2 === 0){

                return "Lỗi: Không thể chia cho 0";

            }

            return num1 / num2;

        case "%":

            if(num2 === 0){

                return "Lỗi: Không thể chia cho 0";

            }

            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return `Lỗi: Operator '${operator}' không hợp lệ`;

    }

}

rl.question("Nhập số thứ nhất: ", function(n1){

    rl.question("Nhập operator (+ - * / % **): ", function(op){

        rl.question("Nhập số thứ hai: ", function(n2){

            let result = calculate(Number(n1), op, Number(n2));

            console.log("Kết quả:", result);

            rl.close();

        });

    });

});