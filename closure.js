function outsideFunc(){
    let callCount = 0;
    return function(){
        if(callCount === 0){
            console.log("Hi, You called me !!");
            callCount++;
        }
        else{
            console.log("You have already called me");
            callCount++;
        }
    }
}

const insideFunc = outsideFunc();
insideFunc();
insideFunc();