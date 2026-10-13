<script setup>
import { ref } from 'vue';
import CounterInputEmit from '../components/CounterInputEmit.vue';
import CounterInput from '../components/CounterInput.vue';
import CounterInputRequired from '../components/CounterInputRequired.vue';
import CounterInputDefault from '../components/CounterInputDefault.vue';

const emitCount = ref(0);
const modelCount = ref(0);
// 故意不給初始值，所以是 undefined
// 想讓父子一開始就一致，改成 ref(0) 就好
const defaultCount = ref();
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <h3>原始寫法：props ＋ emit</h3>
    <p>父元件的 emitCount：{{ emitCount }}</p>
    <CounterInputEmit v-model="emitCount" />

    <h3>defineModel()</h3>
    <p>父元件的 modelCount：{{ modelCount }}</p>
    <CounterInput v-model="modelCount" />

    <h3>defineModel({ required: true })</h3>
    <p>故意不寫 v-model，打開 Console 會看到警告</p>
    <CounterInputRequired />

    <h3>defineModel({ default: 0 })</h3>
    <p>
      default 設定的預設值只會先存在子元件，不會自動同步到父元件的 ref。
      一開始父元件是 undefined、子元件是 0；按下 + 1 之後，子元件才會透過
      update:modelValue 通知父元件，兩邊從這時候開始一致。
    </p>
    <hr />
    <p>父元件的 defaultCount：{{ String(defaultCount) }}</p>
    <CounterInputDefault v-model="defaultCount" />
  </div>
</template>
