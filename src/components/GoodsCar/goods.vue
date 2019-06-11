<template>
  <div class="goods" >
    <div class="goodsList" v-for="(item,index) in cartList" v-bind:key="item._id">
      <div class="goodsTit">
        <img class="goodsImg" :src="item.goodsSrc" alt="">
        <div>{{item.title}}</div>
      </div>
      <div class="number">
          <span @click="changNum(1,item.productId,index)">-</span>
          <span class="numBox">{{item.productNum}}</span>
          <span @click="changNum(2,item.productId,index)">+</span>
      </div>
      <div class="price">
        单价：{{item.price}}
      </div>
      <div class="total">
          总价:{{item.productNum*item.price}}
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cartList:[]
    }
  },
  beforeCreate(){
      console.log(sessionStorage.getItem("userId"))
      let userId = sessionStorage.getItem("userId")
      this.$axios({
        method:"post",
        url:"http://localhost:3000/api/goodscart",
        data:{
          userId:userId
        },
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',  //指定消息格式
        },
      }).then(res=>{
        console.log(res.data)
        this.cartList = res.data.cartList
      }).catch(err=>err)
  },
  methods:{
    changNum(num,id,index){
      let userId = sessionStorage.getItem("userId")
      console.log(this.cartList[index])
      if(num==2){
        this.cartList[index].productNum++
      }else if(num == 1){
        this.cartList[index].productNum--
      }
      console.log(num,id)
      this.$axios({
        method:"post",
        url:"http://localhost:3000/api/addcart",
        data:{
          userId:sessionStorage.getItem("userId"),
          _id:id,
          change:num
        },
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',  //指定消息格式
        },
      }).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.goodsList{
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
}
.goodsTit{
  display: flex;
  flex-grow: 2;

}
.goodsTit div{
  /* width: 50%; */
  width:300px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  flex-shrink: 0;
  
}
.goodsImg{
  width: 60px;
  height: 60px;
}
.number{
  display: flex;
  flex-grow: 2;
}
.numBox{
  border: 1px solid gainsboro;
  padding: 0 4px;
  background-color: white
}
.price{
  display: flex;
  flex-grow: 1;
}
.total{
  display: flex;
  flex-grow: 1;
}
</style>