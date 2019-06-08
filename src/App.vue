<template>
  <div id="app">
    <!-- 导航栏 -->
    <div class="navbox">
      <router-link to="/">首页</router-link>/<router-link to="/goodscar">购物车</router-link>
      
      <router-link to="/modal" v-if="isLogin" class="login">{{login}}</router-link>
      <div class="login" v-else-if="loginOn"></div>
      <div class="login" v-else>{{admin}}</div>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loginOn:false,
      login:"登录",
      admin:""
    }
  },
  mounted(){
    this.bus.$on("changeName",(data)=>{
      console.log(data);
      this.login = data;
      this.loginOn = false
    })
  },
  computed:{
    isLogin(){
      // console.log(sessionStorage.getItem("userName"))
      // console.log(sessionStorage.getItem("userToken"))
      if(sessionStorage.getItem("userName")&&sessionStorage.getItem("userToken")){
        // this.$store.commit("userName",sessionStorage.getItem("userName"));
        this.loginOn = false;
        this.admin = sessionStorage.getItem("userName");

      }else{
        // this.$store.commit("userStatus",null);
        this.loginOn = true;
      }
      // console.log(this.$store.getters.isLogin)
      return this.loginOn
    }
  }
}
</script>

<style>
#app {
  width: 1000px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
}
body{
  margin: 0;
  padding: 0;
}
.content{
  width: 1000px;
  margin: 0 auto;
  background-color: rgb(240, 240, 240)
}
.navbox{
  padding: 20px 0;
  margin: 0 auto;
  height: 20px;
  width: 1000px;
  background-color: rgb(140, 192, 188);
  list-style: none;
}
.login{
  float: right;
  margin-right: 10px;
}
</style>
