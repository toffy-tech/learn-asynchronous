function promiseFactory( count ){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            count++;
            console.log(`${count}回目のコールです。時刻：${new Date().toTimeString()}`);

            if(count===3){
                reject(count);
            }
            else{
                resolve(count);
            }
        }, 1000)
    })
}

/* このコードをasync awaitで書き換える
promiseFactory(0)
.then(count  => { return promiseFactory(count); })
.then(count  => { return promiseFactory(count); })
.then(count  => { return promiseFactory(count); })
.then(count  => { return promiseFactory(count); })
.catch(errorCount  => { console.error(`エラーになりました。現在のカウントは${errorCount}です。`); })
.finally(()=>{console.log("終了。")})
*/

// await / asyncを使った書き換え
async function execute(){
    try{
        // promiseFactory内のresolveが呼び出されるまで次の処理を実行しない
        let count = await promiseFactory(0);
        count = await promiseFactory(count);
        count = await promiseFactory(count);
        count = await promiseFactory(count);
    }
    catch(errorCount){
        console.error(`エラーになりました。現在のカウントは${errorCount}です。`);
    }
    finally{
        console.log("終了。")
    }
}

execute();