// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// answer
function simulateTask() {
    console.log("Task has been started");
    setTimeout(function () {
        console.log("Task has been completed");
    }, 1000);
}
simulateTask();
