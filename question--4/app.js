// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
// answer
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var shouldResolve = true;
            if (shouldResolve) {
                resolve("Data fetched sucessfully");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
var promise1 = fetchWithError();
promise1.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});
