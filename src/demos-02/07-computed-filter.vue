<script setup>
import { ref, computed } from 'vue'

const keyword = ref('')

const products = ref([
  { name: 'Apple' },
  { name: 'Banana' },
  { name: 'Orange' },
])

const filteredProducts = computed(() => {
  console.log('computed 被執行了！')
  return products.value.filter(product =>
    product.name.includes(keyword.value)
  )
})

// 一樣的篩選邏輯，改寫成 method 對照
const filterProducts = () => {
  console.log('method 被執行了！')
  return products.value.filter(product =>
    product.name.includes(keyword.value)
  )
}

// 跟篩選無關的資料：改它只會讓畫面重新渲染
const count = ref(0)
</script>

<template>
  <input v-model="keyword" placeholder="搜尋商品" />

  <ul>
    <li v-for="product in filteredProducts" :key="product.name">
      {{ product.name }}
    </li>
  </ul>

  <p>computed：filteredProducts：{{ filteredProducts }}</p>
  <p>computed：filteredProducts：{{ filteredProducts }}</p>
  <p>computed：filteredProducts：{{ filteredProducts }}</p>

  <hr />

  <!-- <p>method：{{ filterProducts() }}</p>
  <p>method：{{ filterProducts() }}</p>
  <p>method：{{ filterProducts() }}</p> -->
  <button @click="count++">無關的 count + 1（{{ count }}）</button>
</template>
