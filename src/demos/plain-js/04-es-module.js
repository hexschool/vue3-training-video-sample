// 預設匯入（Default Import）：名字自己決定
import multiply2 from './math.js'

// 具名匯入（Named Import）：名字要跟匯出時一致
import { add, subtract, PI } from './math.js'

// 命名空間匯入（Namespace Import）：全部集中到一個物件
import * as math from './math.js'

export function runEsModule() {
  console.log('===== 具名匯入 =====')
  console.log('add(2, 3)', add(2, 3))
  console.log('subtract(5, 2)', subtract(5, 2))
  console.log('PI', PI)

  console.log('===== 預設匯入 =====')
  console.log('multiply2(3, 4)', multiply2(3, 4))

  console.log('===== 命名空間匯入 =====')
  // 具名匯出全部掛在這個物件上，預設匯出則放在 .default
  console.log('math', math)
  console.log('math.add(2, 3)', math.add(2, 3))
  console.log('math.default(3, 4)', math.default(3, 4))
}
