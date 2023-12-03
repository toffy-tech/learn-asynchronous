## ・promiseの基本
resolveをthenで受け取り、rejectをcatchで受け取る


## ・promiseチェーン　直列
直列とは、前の非同期処理の完了を待って、次の非同期処理を実行すること

## ・promise　並列処理
Promise.all 全ての非同期処理を並列に実行し、全てのPromiseインスタンスがfullfilledになれば、thenに続く処理に移行
Promise.race 複数のPromiseインスタンスのいずれかの状態がsettled(fulfilledまたはrejected)になれば、thenに続く処理に移行
Promise.any 複数のPromiseインスタンスのいずれかがfulfilledになれば、thenに続く処理に移行
Promise.allSettled すべてのPromiseインスタンスの状態がsettledになれば、thenに続く処理に移行

## ・async, awaitを用いることで、Promiseのthenの処理をより簡素に記述できるになる
要するにPromiseチェーンの記述を簡略化できる

#### awaitを用いることで、Promiseのステータスがsettled(fulfilledまたはrejeced)になるまで、後続のコードの実行を待機する。

## ・fetch
```node.js
        //fetchの記法
        fetch("リクエストURL" [, data])
            .then(response => response.json())
            .then(data => { 取得したJSONを使って処理を行うコード })
```
