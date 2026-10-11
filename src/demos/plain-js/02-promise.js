export function runPromiseBasic() {
  console.log('準備泡麵')

  // 建立一個 Promise，用來處理泡麵的非同步任務
  const cookNoodles = new Promise((resolve, reject) => {
    const hasHotWater = true

    setTimeout(() => {
      if (hasHotWater) {
        // 任務成功時，呼叫 resolve() 並傳入成功結果
        resolve('泡麵可以吃了')
      } else {
        // 任務失敗時，呼叫 reject() 並傳入失敗原因
        reject('沒有熱水，泡麵失敗')
      }
    }, 0)
  })

  // Promise 成功時，會進入 .then() 接收 resolve() 傳回的結果
  cookNoodles
    .then((res) => {
      console.log('成功：', res)
    })
    // Promise 失敗時，會進入 .catch() 接收 reject() 傳回的錯誤資訊
    .catch((error) => {
      console.log('失敗：', error)
    })
    // 不論成功或失敗，最後都會執行
    .finally(() => {
      console.log('finally 執行 => 不管成功或失敗都會執行')
    })

  console.log('再去拿筷子')
}
