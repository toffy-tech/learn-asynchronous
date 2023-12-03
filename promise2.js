// promiseチェーン　直列。
// 直列とは、前の非同期処理の完了を待って、次の非同期処理を実行すること

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

promiseFactory(0)
.then(count  => { return promiseFactory(count); })
.then(count  => { return promiseFactory(count); })
.then(count  => { return promiseFactory(count); })
.then(count  => { return promiseFactory(count); })
.catch(errorCount  => { console.error(`エラーになりました。現在のカウントは${errorCount}です。`); })
.finally(()=>{console.log("終了。")})