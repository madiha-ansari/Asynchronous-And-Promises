// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
// answer
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
var madiha = fetchData();
madiha.then(function (res) {
    console.log(res);
});
