import { sleep, task } from "./task.ts";

console.time();

console.log(await sleep(3));
console.log(task(3));

console.timeLog();

console.log(await sleep(2));
console.log(task(2));

console.timeLog();

console.log(await sleep(1));
console.log(task(1));

console.timeEnd();
export {};

// 3
// 8189
// default: 3311ms
// 2
// 4093
// default: 5400ms
// 1
// 2045
// default: 6432ms
