<script setup>
import { ref } from 'vue'

// 語法糖拆開來看
const sugarMessage = ref('Hello')

// 各種表單元素
// 姓名：文字輸入框
const name = ref('')

// 自我介紹：多行文字輸入框
const description = ref('')

// 是否同意使用條款：單一 Checkbox
const isAgree = ref(false)

// 興趣：多個 Checkbox
const hobbies = ref([])

// 性別：Radio
const gender = ref('')

// 城市：Select
const city = ref('')

// 進階用法
// Checkbox：自訂勾選與未勾選時的值
const subscribe = ref('no')

// Select：多選結果使用陣列儲存
const skills = ref([])
</script>

<template>
  <h2>v-model 是語法糖</h2>

  <!-- 手動版：自己綁 value、自己聽 input -->
  <div>
    <input v-bind:value="sugarMessage" v-on:input="sugarMessage = $event.target.value" />
    <span>← :value + @input</span>
  </div>

  <!-- 語法糖版：完全等價 -->
  <div>
    <input v-model="sugarMessage" />
    <span>← v-model</span>
  </div>

  <p>{{ sugarMessage }}</p>

  <hr />

  <h2>各種表單元素</h2>

  <form>
    <!-- 姓名：文字輸入框 -->
    <div>
      <label for="name">姓名：</label>
      <input id="name" v-model="name" type="text" placeholder="請輸入姓名" />
    </div>

    <br />

    <!-- 自我介紹：多行文字輸入框 -->
    <div>
      <label for="description">自我介紹：</label>
      <textarea id="description" v-model="description" placeholder="請輸入自我介紹"></textarea>
    </div>

    <br />

    <!-- 是否同意使用條款：單一 Checkbox -->
    <div>
      <input id="agree" v-model="isAgree" type="checkbox" />
      <label for="agree">同意使用條款</label>
    </div>

    <br />

    <!-- 興趣：多個 Checkbox（綁到同一個陣列，用 value 區分） -->
    <div>
      <span>興趣：</span>

      <input id="coding" v-model="hobbies" type="checkbox" value="寫程式2" />
      <label for="coding">寫程式</label>

      <input id="reading" v-model="hobbies" type="checkbox" value="閱讀" />
      <label for="reading">閱讀</label>

      <input id="travel" v-model="hobbies" type="checkbox" value="旅遊" />
      <label for="travel">旅遊</label>
    </div>

    <br />

    <!-- 性別：Radio -->
    <div>
      <span>性別：</span>

      <input id="male" v-model="gender" type="radio" value="男" />
      <label for="male">男</label>

      <input id="female" v-model="gender" type="radio" value="女" />
      <label for="female">女</label>
    </div>

    <br />

    <!-- 城市：Select -->
    <div>
      <label for="city">城市：</label>

      <select id="city" v-model="city" required>
        <option disabled value="">請選擇城市</option>
        <option value="台北">台北</option>
        <option value="台中">台中</option>
        <option value="高雄">高雄</option>
      </select>
    </div>

    <br />
    <hr />
    <br />

    <!-- 顯示目前表單資料 -->
    <div>
      <p>姓名：{{ name }}</p>
      <p>自我介紹：{{ description }}</p>
      <p>是否同意：{{ isAgree }}</p>
      <p>興趣：{{ hobbies }}</p>
      <p>性別：{{ gender }}</p>
      <p>城市：{{ city }}</p>
    </div>
  </form>

  <hr />

  <h2>進階用法</h2>

  <form>
    <!-- Checkbox 自訂 true / false 對應值 -->
    <div>
      <input id="subscribe" v-model="subscribe" type="checkbox" true-value="yes111" false-value="no222" />
      <label for="subscribe">訂閱電子報</label>
    </div>

    <br />

    <!-- Select 多選（按住 Cmd / Ctrl 可以選多個） -->
    <div>
      <label for="skills">擅長技術：</label>

      <select id="skills" v-model="skills" multiple>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Vue">Vue</option>
      </select>
    </div>

    <br />
    <hr />
    <br />

    <p>是否訂閱：{{ subscribe }}</p>
    <p>擅長技術：{{ skills }}</p>
  </form>
</template>
