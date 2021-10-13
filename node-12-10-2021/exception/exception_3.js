function safeDiv(num1,num2){
    try {
        if(num1 == 0){
            throw  console.log(`denominator is zero`);
        }
        console.log(num1 / num2);

    } catch (error) {
    }
}

safeDiv(0,3)