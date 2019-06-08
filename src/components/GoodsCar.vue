<template>
  <div class="goodscar">
      <goods></goods>
  </div>
</template>

<script>
import Goods from './GoodsCar/goods'
export default {
  name: 'GoodsCar',
  data () {
    return {
      msg: 'goods-car'
    }
  },
  components:{
    'goods':Goods
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
