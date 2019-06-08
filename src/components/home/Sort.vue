<template>
  <div class="sort" @click="sort">
    {{msg}}:↑↓
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data () {
    return {
      msg: '价格排序'
    }
  },
  methods:{
    sort(e){
      e.target.style.color="blue";
      // 进行排序操作
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sort{
  color: rgb(160, 88, 1);
  font-size: 12px;
  display: float;
  float: right;
}
</style>
