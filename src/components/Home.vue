<template>
  <div class="home">
    <div class="parent">  
        <div class="stable">
            <left-nav></left-nav>    
        </div>  
        <div class="change">
          <div class="sort">
            <sort></sort>
          </div>
          <goods :goods="goodsList"></goods>
        </div>  
    </div> 
  </div>
</template>

<script>
import LeftNav from "./Home/LeftNav"
import Goods from "./Home/Goods"
import Sort from "./Home/Sort"

export default {
  name: 'Home',
  data () {
    return {
      goodsList: []
    }
  },
  mounted(){
    this.bus.$on("resGoods",(data)=>{
      console.log(data);
      this.goodsList = data;
    })
  },
  components:{
      "left-nav":LeftNav,
      "goods":Goods,
      "sort":Sort
  },
  beforeCreate(){
      this.$axios({
        method:"post",
        url:"http://localhost:3000/api/showgoods",
        data:{
          sort:0,
          page:0,
          pageSize:4
        },
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',  //指定消息格式
        },
      }).then(res=>{
        console.log(res.data)
        this.goodsList = res.data
        this.bus.$emit("resGoods",this.goodsList)
      }).catch(err=>err)
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .parent{
        display: flex;
        /* height: 560px; */
        border: 1px solid gray
    }
    .stable{
        width: 140px;
        height: 220px;
        border: 1px solid greenyellow;
        margin: 20px
    }
    .change{
        flex: 1;
        border: 1px solid greenyellow;
        margin: 20px
    }
    .sort{
      margin: 4px 10px 0;
      overflow: hidden;
    }
</style>
