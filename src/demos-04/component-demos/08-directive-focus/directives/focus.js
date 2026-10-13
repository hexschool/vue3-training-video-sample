// 元素放到畫面上之後，自動把游標放進去
export const vFocus = {
  mounted(el) {
    el.focus();
  },
};
