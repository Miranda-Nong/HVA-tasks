function secondMax(num1, num2, num3) {
    if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
        console.log("The second maximum number is: " + num1);
    } 
    else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
        console.log("The second maximum number is: " + num2);
    } 
    else {
        console.log("The second maximum number is: " + num3);
    }
}

secondMax(10, 20, 30);
