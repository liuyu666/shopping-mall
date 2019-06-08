<template>
  <div class="goods">
    <div class="goodsTit">
        <img class="goodsImg" src="https://m.360buyimg.com/babel/jfs/t26881/248/1069038704/78844/5f504fd9/5bc0914fN9c0e3876.jpg!q100.jpg.webp" alt="">
        <div>title</div>
    </div>
    <div>
        <span>+</span>
        <span></span>
        <span>-</span>
    </div>
    <div>
        总价
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods{
    height: 80px;
}
.goodsTit{
    width: 30%;

}
.goodsImg{
    width: 60px;
    height: 60px
}
</style>
