//Write an asynchronous function that accepts a message string and a delay time in milliseconds
// The function should log the message to the console after the specified delay time

async function logMessageWithDelay(message, delay) {

    await new Promise(resolve => setTimeout(resolve, delay));

    console.log(message);

  }

  logMessageWithDelay("I am happy", 5000);

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

async function fetchDataSequentially(userIds) {

    const userDataArray = [];

    for (const userId of userIds) {

      try {

        const userData = await getUserData(userId);

        userDataArray.push(userData);

        console.log(`User data for ID ${userId}:`, userData);

      } catch (error) {

        console.error(`Error fetching data for ID ${userId}:`, error.message);

      }

    }

    console.log(`Fetch data for ${userIds.length} user IDs.`);

  }

  const userIds = [15,27,30,25];
  fetchDataSequentially(userIds);

//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error.
// Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

const result = true;

const ourPromise = new Promise((resolve, reject)=>{

    if(result){

        resolve ("Excel in my academics");

    }

    else{

       reject("Task not successful")
    }

})

ourPromise.then((response)=>{

    console.log({response});

    console.log("Task successful");
})

.catch((error)=>{

    console.log({error});

    console.log("Task is not successful");
})

console.log({ourPromise});

async function performTask(){

    try{

        console.log("Task successful");

        await ourPromise;

    }

    catch{
        console.log("Task has not been successful");
    }
}

performTask();

//Retry Logic:
// Scenario:
// Write a function unstableTask that:
// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.

// Write another function executeWithRetry that:
// 1.Accepts a taskName, retries, and failureProbability.
// 2.Uses a retry mechanism to attempt the unstableTask up to retries times.
// 3.Logs whether the task succeeded or failed after all attempts.

async function executeWithRetry(taskName, retries, failureProbability) {

    let attempt = 0;

    while (attempt < retries) {

        try {

            await unstableTask(taskName, failureProbability);

            console.log(`${taskName} succeeded after ${attempt + 1} attempts.`);

            return;

        } catch (error) {

            console.error(`${taskName} failed on attempt ${attempt + 1}.`);

            attempt++;

        }
    }

    console.error(`${taskName} failed after ${retries} attempts.`);

}

executeWithRetry("SampleTask", 3, 0.8);






