Component({
  properties: {},
  data: {
    args: {
      withCredentials: true,
      lang: 'zh_CN'
    }
  },
  methods: {
    loginSuccess(res) {
      console.log(res.detail)
    },
    loginFail(res) {
      console.log(res)
    }
  }
})