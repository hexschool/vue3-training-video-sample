<script setup>
import { ref } from 'vue'

// Class 物件方式
const isActive = ref(true)

// 切換 Class 狀態
const toggleClass = () => {
  isActive.value = !isActive.value
}

// Class 陣列方式
const themeClass = ref('theme-light')
const sizeClass = ref('btn-lg')

// 同時切換兩組 Class
const toggleClassStyle = () => {
  themeClass.value =
    themeClass.value === 'theme-light'
      ? 'theme-dark'
      : 'theme-light'

  sizeClass.value =
    sizeClass.value === 'btn-lg'
      ? 'btn-sm'
      : 'btn-lg'
}

// Style 物件方式
const activeColor = ref('#42b883')
const fontSize = ref(18)

// Style 陣列方式
const colorStyles = ref({
  backgroundColor: '#42b883',
  color: 'white',
})

const sizeStyles = ref({
  padding: '12px 24px',
  fontSize: '18px',
})

// 同時切換兩組 Style Object
const toggleStyle = () => {
  colorStyles.value =
    colorStyles.value.backgroundColor === '#42b883'
      ? {
        backgroundColor: '#333',
        color: 'white',
      }
      : {
        backgroundColor: '#42b883',
        color: 'white',
      }

  sizeStyles.value =
    sizeStyles.value.fontSize === '18px'
      ? {
        padding: '6px 12px',
        fontSize: '14px',
      }
      : {
        padding: '12px 24px',
        fontSize: '18px',
      }
}
</script>

<template>
  <h2>Class 綁定</h2>

  <div class="demo">
    <!-- 物件：根據值的 Truthy / Falsy 決定 Class 是否套用 -->
    <button class="btn" :class="{ active: isActive }">
      物件綁定
    </button>

    <!-- 陣列：一次組合多個動態 Class -->
    <button class="btn" :class="[themeClass, sizeClass]">
      陣列綁定
    </button>
  </div>

  <p>
    <button type="button" @click="toggleClass">
      切換 active
    </button>

    <button type="button" @click="toggleClassStyle">
      切換 Class 組合
    </button>
  </p>

  <hr />

  <h2>Style 綁定</h2>

  <div class="demo">
    <!-- 物件：以 CSS 屬性名稱與對應的值設定樣式 -->
    <button class="btn" :style="{
      backgroundColor: activeColor,
      color: 'white',
      fontSize: fontSize + 'px',
    }">
      物件綁定
    </button>

    <!-- 陣列：一次組合多個動態 Style Object -->
    <button class="btn" :style="[colorStyles, sizeStyles]">
      陣列綁定
    </button>
  </div>

  <p>
    <button type="button" @click="toggleStyle">
      切換 Style 組合
    </button>
  </p>
</template>

<style scoped>
.demo {
  display: flex;
  gap: 16px;
}

.btn {
  padding: 8px 16px;
  border: 1px solid #999;
  border-radius: 6px;
  cursor: pointer;
}

.active {
  background: #42b883;
  color: white;
}

.theme-light {
  background: white;
  color: #333;
}

.theme-dark {
  background: #333;
  color: white;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 14px;
}

.btn-lg {
  padding: 12px 24px;
  font-size: 18px;
}
</style>