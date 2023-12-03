// promiseの基本
// resolveをthenで受け取り、rejectをcatchで受け取る

let instance = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const rand =Math.floor(Math.random()*11);

        if(rand<5){
            reject(rand);
        }else{
            resolve(rand);
        }
    }, 1000)
});

instance= instance.then(value=>{
    console.log(`5以上の${ value }がわたってきました。`);
})


instance= instance.catch(value=>{
    console.log(`5未満の${ value }がわたってきました。`);
})

instance= instance.finally(value=>{
    console.log(`処理を終了します`);
})