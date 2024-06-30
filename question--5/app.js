// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
// answer
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully");
        }, 1000);
    });
}
function processData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Data processed failed");
        }, 2000);
    });
}
function executeSequentially(fetchDataCallback, processDataCallback) {
    fetchDataCallback().then(function (res) {
        console.log(res);
        return processDataCallback();
    }).catch(function (rej) {
        console.log(rej);
    });
}
executeSequentially(fetchData, processData);
