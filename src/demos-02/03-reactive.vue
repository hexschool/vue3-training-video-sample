<script setup>
import { reactive } from 'vue'

// 1. reactive 只能處理 Object Type
const user = reactive({
  name: 'Antonio',
  age: 18,
  profile: {
    city: 'Taichung',
  },
})

console.log('user', user)

// Primitive Type 不適合直接使用 reactive
// reactive(123)
// reactive('Hello')
// reactive(true)


// 2. 不適合直接替換整個 reactive 物件
let account = reactive({
  name: 'Antonio',
})

const replaceAccount = () => {
  console.log('before account', account)
  account = {
    name: 'Amy',
  }
  console.log('after account', account)
}

// 顯示 account 當前值
const logAccount = () => {
  console.log('account：', account)
}


// 3. reactive 預設具有深層響應性
const cities = ['Taipei', 'Taichung', 'Kaohsiung']

const updateCity = () => {
  const others = cities.filter((city) => city !== user.profile.city)

  // 即使 profile 是內層物件，
  // Vue 一樣可以追蹤 city 的變化
  user.profile.city = others[Math.floor(Math.random() * others.length)]
}


// 4. 直接取出 Primitive Type 屬性會失去響應式連結
const { age, profile } = user
// user.age
console.log('age', age)
console.log('profile', profile)

const increaseAge = () => {
  user.age++
  profile.city = '22222'
}
</script>

<template>
  <div>
    <!-- 1. reactive 可以追蹤物件中的資料 -->
    <section>
      <h2>Object Type</h2>

      <p>姓名：{{ user.name }}</p>
      <p>年齡：{{ user.age }}</p>
      <p>城市：{{ user.profile.city }}</p>
    </section>

    <hr />

    <!-- 2. 不適合直接替換整個 reactive 物件 -->
    <section>
      <h2>替換整個物件</h2>

      <p>Account：{{ account.name }}</p>

      <input v-model="account.name" />

      <br />
      <button @click="replaceAccount">
        替換 account
      </button>

      <div>
        <button @click="logAccount">
          Console 印出 account
        </button>
      </div>
    </section>

    <hr />

    <!-- 3. reactive 預設具有深層響應性 -->
    <section>
      <h2>深層響應性</h2>

      <p>城市：{{ user.profile.city }}</p>

      <!--
        修改內層物件的 city，
        畫面一樣會跟著更新
      -->
      <button @click="updateCity">
        修改城市
      </button>
    </section>

    <hr />

    <!-- 4. 直接取出屬性會失去響應式連結 -->
    <section>
      <h2>取出屬性</h2>
      <!-- reactive 裡面的 age -->
      <p>user.age：{{ user.age }}</p>
      <!-- 解構後的一般 number -->
      <p>解構後的 age：{{ age }}</p>
      <button @click="increaseAge">
        年齡 + 1
      </button>
    </section>
  </div>
</template>
