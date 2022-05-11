let arr = [7, 9, 56, 45];


function MaxElement(arr) {
    let max = arr[0];
    for (const el of arr) {
        if (el > max) {
            max = el
        }
    }
    return max;
}
alert(MaxElement(arr));



function SumEvenNums(arr) {
    let sum = 0;
    for (const el of arr) {
        if (el % 2 == 0) {
            sum +=el;
        }
    }
    return sum;
}
console.log(SumEvenNums(arr));




function Power(num1,num2){
    let powResult=num1;

    for(let i=num1;i<num2;i++){
        num1*=powResult;
    }
    return num1;
}

let num1=prompt("eded1:")
let num2=prompt("eded2:")


alert(Power(num1,num2));