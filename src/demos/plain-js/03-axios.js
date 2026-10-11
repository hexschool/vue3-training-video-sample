import axios from 'axios'

export function runAxios() {
  console.log('===== 1. .then 串接 =====')

  {
    const USER_TOTAL_NUMBER = 208
    const randomId = Math.floor(Math.random() * USER_TOTAL_NUMBER) + 1

    axios
      .get(`https://dummyjson.com/users/${randomId}?delay=2000`)
      .then((res) => {
        console.log('user1', res.data.id, res.data.email)
        const { id, email } = res.data
        return axios.get(`https://dummyjson.com/users/${id}?delay=2000`)
      })
      .then((res) => {
        console.log('user2', res.data.id, res.data.email)
      })
      .catch((error) => {
        console.error('取得使用者失敗：', error)
      })
  }

  // console.log('===== 2. async 函式 =====')

  const asyncFn = async () => {
    const USER_TOTAL_NUMBER = 208
    const randomId = Math.floor(Math.random() * USER_TOTAL_NUMBER) + 1

    try {
      // ======= 取得第一位用戶資料 =======
      const user1Response = await axios.get(
        `https://dummyjson.com/users/${randomId}?delay=2000`,
      )
      console.log('user1', user1Response.data.id, user1Response.data.email)
      const { id } = user1Response.data

      // ======= 取得第二位用戶資料 =======
      const user2Response = await axios.get(`https://dummyjson.com/users/${id}?delay=2000`)
      console.log('user2', user2Response.data.id, user2Response.data.email)
    } catch (err) {
      console.log('取得用戶資料有錯誤', err)
    }
  }

  // asyncFn()
}
