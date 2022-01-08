// MÁY TÍNH CƠ BẢN
//theo if
let phepTinh = prompt ("Chọn 1 trong 4 phép tính sau cho a và b: + - * /")
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt ("Nhập số b:"));
if (phepTinh == "+" ) {
    result = a + b;
    console.log(`${a} ${phepTinh} ${b} = ${result}`);
    alert(`${a} ${phepTinh} ${b} = ${result}`);
} else if (phepTinh == "-") {
    result = a - b;
    console.log(`${a} ${phepTinh} ${b} = ${result}`);
    alert(`${a} ${phepTinh} ${b} = ${result}`);
} else if (phepTinh == "*") {
    result = a * b;
    console.log(`${a} ${phepTinh} ${b} = ${result}`);
    alert(`${a} ${phepTinh} ${b} = ${result}`);
} else {
    result = a / b;
    console.log(`${a} ${phepTinh} ${b} = ${result}`);
    alert(`${a} ${phepTinh} ${b} = ${result}`);
} 

//theo switch

let phepTinh = prompt ("Chọn 1 trong 4 phép tính sau cho a và b: + - * /")
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt ("Nhập số b:"));
switch(phepTinh) {
    case "+":
        result = a + b;
        console.log(`${a} ${phepTinh} ${b} = ${result}`);
        alert(`${a} ${phepTinh} ${b} = ${result}`);
        break;
    case "-":
        result = a - b;
        console.log(`${a} ${phepTinh} ${b} = ${result}`);
        alert(`${a} ${phepTinh} ${b} = ${result}`);
        break;
    case "*":
        result = a * b;
        console.log(`${a} ${phepTinh} ${b} = ${result}`);
        alert(`${a} ${phepTinh} ${b} = ${result}`);
        break;
    case "/":
        result = a / b;
        console.log(`${a} ${phepTinh} ${b} = ${result}`);
        alert(`${a} ${phepTinh} ${b} = ${result}`);
    default:
        console.log('Phép tính nhập không hợp lệ');
        break;
}


// TÌM SỐ NGUYÊN TỐ
let num = parseInt(prompt("Nhập một số nguyên dương: "));
let isPrime = true;
if(num === 1) {
    console.log("1 không là số nguyên tố.");
    alert(`1 không là số nguyên tố`);
} else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} là số nguyên tố`);
        alert(`${num} là số nguyên tố`);
    } else {
        console.log(`${num} không là số nguyên tố nhé é e`);
        alert(`${num} không là số nguyên tố nhé é e`);
    }
} else {
    console.log(`${num} không là số nguyên tố nhé é e`);
    alert(`${num} không là số nguyên tố nhé é e`);
}
