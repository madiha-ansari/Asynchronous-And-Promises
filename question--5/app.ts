// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

// answer


function fetchData(){
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            resolve("Data fetched successfully")
        },1000)
    })
}

function processData(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Data processed failed")
        },2000)
    })
}
function executeSequentially(fetchDataCallback:any,processDataCallback:any){

    fetchDataCallback().then((res:string)=>{
         console.log(res)  
         return processDataCallback()
        }) .catch((rej:string)=>{
            console.log(rej)
           
        })
    }
    executeSequentially(fetchData,processData)