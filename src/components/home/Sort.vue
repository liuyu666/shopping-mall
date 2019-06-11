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
      msg: '价格排序',
      flag:2,
      goodsList:[],
      List:[]
    }
  },
  mounted(){
    this.bus.$on("resGoods",(data)=>{
      console.log(data);
      this.goodsList = data;
    })
  },
  methods:{
    sort(e){
      e.target.style.color="blue";
      // 进行排序操作方法一
      
      // if(this.flag==1){
      //   this.flag = 2
      // }else if(this.flag===2){
      //   this.flag = 1
      // }
      // this.$axios({
      //   method:"post",
      //   url:"http://localhost:3000/api/showgoods",
      //   data:{
      //     sort:this.flag,
      //     page:0,
      //     pageSize:4
      //   },
      //   headers:{
      //       'Content-Type': 'application/json;charset=UTF-8',  //指定消息格式
      //   },
      // }).then(res=>{
      //   console.log(res.data)
      //   this.bus.$emit('resGoods',res.data)
      // }).catch(err=>err)
      //方法二
      console.log(this.goodsList)
      if(this.flag==1){
        this.list = this.goodsList.sort(function(a,b){
            return a["price"]-b["price"]
        });
        this.flag = 2
      }else if(this.flag==2){
        this.list = this.goodsList.sort(function(a,b){
            return b["price"]-a["price"]
        });
        this.flag = 1
      }
      this.bus.$emit("resGoods",this.list)
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
  cursor: pointer;
}
</style>
