// ===== 具名匯出：可以有多個 =====
export const add = (a, b) => a + b

export const subtract = (a, b) => a - b

export const PI = 3.14159

// ===== 預設匯出：一個模組只有一個 =====
// 這裡放「這個模組最主要的功能」，匯入時的名字由使用它的人決定
export default function multiply(a, b) {
  return a * b
}
