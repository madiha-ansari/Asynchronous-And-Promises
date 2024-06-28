// Assignment
// Topic : Asynchronous

// Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

async function fetchGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Congratulations, the new Islamic month is about to start.");
    }, 2000);
  });
}
let madiha = fetchGreeting();
madiha.then((res) => {
  console.log(res);
});
