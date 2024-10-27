import handleResponseFromAPI from "./2-then";

console.log("start")

const promise = Promise.resolve();
handleResponseFromAPI(promise);

console.log("end")