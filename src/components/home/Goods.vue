<template>
  <div class="goods">
    <div class="goodsBox" v-for="item in goods" :key="item._id">
      <div class="goodsImg">
          <img :src="item.goodsSrc" alt="">
      </div>
      <!-- 商品标题 -->
      <div class="title">
          {{item.title}}
      </div>
      <!-- 价格 -->
      <div class="price">
        <span>￥</span><span>{{item.price}}</span>
      </div>
      <!-- 库存 -->
      <div class="num">
        <span>库存：</span><span>{{item.num}}</span>
      </div>
      <!-- 加入购物车 -->
      <div class="join" @click="addCart(item._id)">
        <span>{{join}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  props:['goods'],
  data () {
    return {
      join:"+ 加入购物车",
      // goods:[],
      
    }
  },
  methods:{
    addCart(id){
      this.$axios({
        method:"post",
        url:"http://localhost:3000/api/addcart",
        data:{
          userId:sessionStorage.getItem("userId"),
          _id:id
        },
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',  //指定消息格式
        },
      }).then(res=>{
        console.log(res.data);
        if(res.data.status){
          alert("失败"+res.msg)
        }else{
            alert("加入成功")
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
}
.goodsBox:hover .goodsImg{
  border: 1px solid red;
  transform:translateY(4px);
  -webkit-transform:translateY(4px);
  -o-transform:translateY(4px);
  -moz-transform:translateY(4px);
}
.goodsBox{
    /* flex-flow: 0 意思是剩余有空间不会填满 */
    flex-grow: 0;
    flex-basis: 140px;
    width: 150px;
    height: 230px;
    margin: 10px;
    background-color: aqua;
    overflow: hidden;
}
.goodsImg{
    width: 100px;
    height: 100px;
    margin: 4px auto;
    /* display: flex;
    justify-items: center;
    align-content: center; */
}
.goodsImg img{
    width: 100px;
    height: 100px;
    object-fit: cover;
}
.title{
    margin: 4px auto;
    font-size: 12px;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.price{
  color: red;
  font-size: 14px;
  margin: 4px auto;
  width: 140px;
}
.num{
  width: 140px;
  font-size: 12px;
  color: gray;
  margin: 0 auto;
}
.join{
  color: azure;
  font-size: 12px;
  text-align: center;
  width: 100px;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  margin: 10px auto;
  background-color: rgb(236, 54, 54);
  border-radius: 4px;
  cursor: pointer;
}
</style>
