const count = (countdown) =>
new Promise ((resolve, reject) => {
    if(countdown >= 1){
        setTimeout(() =>{
            document.querySelector(".countdown").innerText =
             countdown;
            resolve(countdown)
        }, 1000)
    }else{
        reject("no", "End");
    }
});
count(9)
.then(n=>count(--n))
.then(n=>count(--n))
.then(n=>count(--n))
.then(n=>count(--n))
.then(n=>count(--n))
.then(n=>count(--n))
.then(n=>count(--n))
.then(n=>count(--n))
.then(n=>count(--n))
// .then(()=>console.log("success path"),
//       ()=>{
//           setTimeout(()=>{
//               document.querySelector(".countdown").innerText = "Happy Independence Day";
//           },1000)
//       }
//     );

.catch(()=>{
    setTimeout(()=>{
        document.querySelector(".countdown").innerText=
        "Happy Independence Day";
    }, 1000)
}) 