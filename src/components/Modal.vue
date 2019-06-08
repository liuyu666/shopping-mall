<template>
  <div class="modal">
      <div v-if="isErr" class="prompt">{{newsErr}}</div>
      <form action="" name="form">
          用户名：<input type="text" ref="admin">
          密码：<input type="password" ref="password">
          <button @click="submit">登录</button>
      </form>
      <div>{{resData}}</div>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'Modal',
  data () {
    return {
      msg: '登录',
      isErr:false,
      newsErr:"密码错误",
      resData:""
    }
  },
  methods:{
    submit:function(e){
        var that = this
        console.log(that.$refs.admin.value)
        console.log(that.$refs.password.value)
        let admin = that.$refs.admin.value
        let password = that.$refs.password.value
        e.preventDefault();
        if(!admin){
            that.newsErr = "用户名为空"
            that.isErr = true
        }else if(!password){
            that.newsErr = "密码为空"
            that.isErr = true
        }else{
          console.log(qs)
          let data = {
            username:admin,
            password:password
          }
          let qsstr = qs.stringify(data)
            console.log("qs:"+qsstr)
            // this.$axios.post( 'http://localhost:3000/api/join',{params:qsstr},{
            //     headers:{
            //     'Content-Type': 'application/json'
            //     // 'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            // })
            this.$axios({
                method: "POST",
                url: 'http://localhost:3000/api/login',
                data: data,
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8',  //指定消息格式
                },
            })
            .then(res=>{
                this.resData = res.data.user.username;
                this.bus.$emit('changeName',res.data.user.username)
                console.log(res.data)
                sessionStorage.setItem("userName",res.data.user.username)
                sessionStorage.setItem("userToken",res.data.token)
                // this.$store.dispatch("setUser",res.data.user.username)
                // this.$store.dispatch("setToken",res.data.token)

                // console.log(this.$store.state.islogin)
                this.$router.push({path:'/'})

            }).catch(error=>{
                console.log(error);
                this.resData = "用户名或者密码无效";
            })
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prompt{
    color: red;
}
</style>
