export function runValueVsReference() {
  // ===== 練習 1：原始型別複製的是值 =====
  let a = 10 // a 初始值 10
  let b = a // 把 a 的「值」複製一份給 b

  b = 20 // 修改 b 的值

  console.log('===== 練習 1 結果 =====')
  console.log('a', a) // a 顯示為 10
  console.log('b', b) // b 顯示為 20

  // ===== 練習 2.1：物件複製的是參考 =====
  const aUser = {
    id: 10,
    name: 'Antonio',
    skill: ['Angular', 'Vue', 'React'],
  }

  const bUser = aUser //  aUser 的物件參考指定給 bUser

  console.log('===== 練習 2.1 結果 =====')

  bUser.name = 'Anna' // aUser 跟 bUser 的 name 屬性同時都會改動

  console.log('查看 aUser.name 與 bUser.name 的值', aUser.name, bUser.name) // 都是顯示 Anna
  console.log('查看 aUser.name 與 bUser.name 是否相等', aUser.name === bUser.name) // 顯示 true

  // ===== 練習 2.2：陣列也是參考 =====
  const cUser = {
    id: 10,
    name: 'Antonio',
    skill: ['Angular', 'Vue', 'React'],
  }

  const dSkill = cUser.skill //  cUser skill 的物件參考指定給 dSkill

  dSkill.push('Svelte') // cUser Skill 跟 dSkill 都會同時新增

  console.log('===== 練習 2.2 結果 =====')
  console.log('查看 cUser.skill 與 dSkill 的值', cUser.skill, dSkill) // 都是顯示 ["Angular","Vue","React","Svelte"]
  console.log('查看 cUser.skill 與 dSkill 是否相等', cUser.skill === dSkill) // 顯示 true

  // ===== 練習 3：在函式裡「修改屬性」 =====
  console.log('===== 練習 3 結果 =====')
  const eUser = { name: 'Antonio' }
  const fUser = eUser

  function getUserName1(userObj) {
    userObj.name = 'Maxine'
    console.log('userObj', userObj)
  }

  getUserName1(eUser)

  console.log('查看 eUser 與 fUser 的值', eUser, fUser) // 都是顯示 { name: "Maxine" }
  console.log('查看 eUser 與 fUser 是否相等', eUser === fUser) // 顯示 true

  // ===== 練習 4：在函式裡「重新賦值」 =====
  console.log('===== 練習 4 結果 =====')
  const hUser = { name: 'Antonio' }
  const gUser = hUser

  function getUserName2(userObj) {
    // 重新賦值
    userObj = { name: 'Maxine' }
    console.log('userObj', userObj)
  }

  getUserName2(hUser)

  console.log('查看 hUser 與 gUser 的值', hUser, gUser) // 都是顯示 { name: "Antonio" }
  console.log('查看 hUser 與 gUser 是否相等', hUser === gUser) // 顯示 true
}
