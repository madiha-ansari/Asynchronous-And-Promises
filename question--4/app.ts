// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

// answer

function fetchWithError(){
    return new Promise ((resolve, reject) => {
     
        setTimeout(()=>{
            let myCoading = true; 
             if(myCoading){
                resolve("Data fetched sucessfully")
            }
        else{
            reject("Data fetch failed!")
        }
        },1000)
    })
    }
    let question4 = fetchWithError();
    question4.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
    
    