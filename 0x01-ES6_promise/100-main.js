import asyncUploadUser from "./100-await";

const test =  async () => {
    const value = await asyncUploadUser();
    console.log(value);
};
console.log("start")
test();
console.log("end")
