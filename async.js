// async, awaitを用いることで、Promiseのthenの処理をより簡素に記述できるになる
// 要するにPromiseチェーンの記述を簡略化できる

async function asyncFunction(){
    return "hello";
}

asyncFunction().then((returnVal)=>{console.log(returnVal)});