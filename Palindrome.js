function Palindrome(string){
    let revString="";
    for(let i=string.length-1; i>=0; i++){
        revString+=string[i];
    }
    if(string==revString){
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome);
    }
}
let str="amma";
Palindrome("str");