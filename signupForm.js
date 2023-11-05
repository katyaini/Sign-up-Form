
const createAccount = document.querySelector(".submit");

createAccount.addEventListener("click",(e)=>{

    var password = document.querySelector("#pwd").value
    var confirmPassword = document.querySelector("#Cpwd").value

    
    
     if(password != confirmPassword) {
        alert("passwords do not match!");
        console.log("passwords do not match!");
    }
    if (password === confirmPassword){
        alert("passwords match!welcome");
        console.log("passwords match!welcome");


    }
}
);