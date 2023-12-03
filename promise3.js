// promise　並列処理
// Promise.all 全ての非同期処理を並列に実行し、全てのPromiseインスタンスがfullfilledになれば、thenに続く処理に移行
// Promise.race 複数のPromiseインスタンスのいずれかの状態がsettled(fulfilledまたはrejected)になれば、thenに続く処理に移行
// Promise.any 複数のPromiseインスタンスのいずれかがfulfilledになれば、thenに続く処理に移行
// Promise.allSettled すべてのPromiseインスタンスの状態がsettledになれば、thenに続く処理に移行

function wait( ms ) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ms}msの処理が完了しました`);
            resolve(ms);
        }, ms)
    })
}

const wait400 = wait(400);
const wait500 = wait(500);
const wait600 = wait(600);

Promise.all([wait500, wait600, wait400])
.then(([resolved500, resolved600, resolved400])=>{
    console.log("すべてのPromiseが完了しました");
    console.log(resolved400, resolved500, resolved600);
})