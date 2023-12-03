// promiseの状態管理
// pending 初期状態、 fulfilled resolveが呼び出された状態、 rejected rejectが呼び出された状態

let promResolve, promReject;

const prom = new Promise((resolve, reject)=>{
    promResolve=resolve;
    promReject=reject;
})

console.log(prom);
// Promise {<pending>}

promResolve("toffy");

console.log(prom);
// Pomise {<fulfilled>: "toffy"}