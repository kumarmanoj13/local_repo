let btn = document.getElementById("btn");
let count = 1;
btn.addEventListener("click", () => {
    if(count === 0){
        document.body.style.backgroundColor = "aqua";
        count++;
    }
    else if(count===1){
        document.body.style.backgroundColor = "red";
        count++;
    }
    else if(count === 2){
        document.body.style.backgroundColor = "blue";
        count++;
    }
    else if(count === 3){
        document.body.style.backgroundColor = "green";
        count++;
    }
    else if(count === 4){
        document.body.style.backgroundColor = "yellow";
        count = 0
    }
})

let btn2 = document.getElementsByClassName("btn")[0];
let para = document.getElementsByTagName("p")[0];
btn2.addEventListener("click", () => {
    para.innerText = "Hello Ghost!";
})