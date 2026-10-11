<script setup>
import { ref } from 'vue'

// 1. JavaScript 中需要透過 .value 存取資料
const count = ref(0)
console.log('count ref', count)

const increaseCount = () => {
  // 在 <script> 中需要透過 .value 修改資料
  count.value++
}


// 2. 可以直接傳遞 Ref 本身，響應式連結仍然會保留
const score = ref(10)

const increaseScore = (scoreRef) => {
  // 傳進來的仍然是同一個 Ref
  scoreRef.value++
}

const updateScore = () => {
  increaseScore(score)
}


// 3. ref 也可以存放物件
const user = ref({
  name: 'Antonio',
  profile: {
    city: 'Taichung',
  },
})
console.log('user', user)

const cities = ['Taipei', 'Taichung', 'Kaohsiung']

const updateCity = () => {
  const others = cities.filter((city) => city !== user.value.profile.city)
  user.value.profile.city = others[Math.floor(Math.random() * others.length)]
}
</script>

<template>
  <div>
    <!-- 1. Template 中會自動解包，不需要寫 .value -->
    <section>
      <h2>.value 與 Template 自動解包</h2>
      <p>Count：{{ count }}</p>

      <button @click="increaseCount">
        Count + 1
      </button>
    </section>

    <hr />

    <!-- 2. Ref 本身可以直接傳遞 -->
    <section>
      <h2>傳遞 Ref</h2>

      <p>Score：{{ score }}</p>
      <button @click="updateScore">
        Score + 1
      </button>
    </section>

    <hr />

    <!-- 3. ref 也可以存放物件 -->
    <section>
      <h2>ref 存放物件</h2>
      <p>姓名：{{ user.name }}</p>
      <p>城市：{{ user.profile.city }}</p>
      <button @click="updateCity">
        修改城市
      </button>
    </section>
  </div>
</template>
