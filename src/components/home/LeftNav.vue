<template>
  <div class="leftnav">
      <ul class="moneyList">
          <li v-for="(value, key) in list" :key="key" @click="changeMoney($event)" :data-price='value.arrsection'>{{value.section}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  data () {
    return {
        list:[
          {"section":"All","arrsection":[0,99999]},
          {"section":"0-100","arrsection":[0,100]},
          {"section":"100-500","arrsection":[100,500]},
          {"section":"500-1000","arrsection":[500,1000]},
          {"section":"1000-2000","arrsection":[1000,2000]},
          {"section":"5000以上","arrsection":[5000,9999999]}
        ],
    }
  },
  methods:{
    changeMoney(e){
      console.log(e.currentTarget.dataset.price);
      // console.log(e.target.parentNode.children);
      // console.log(e.target.parentNode.childNodes);
      let priceSection = e.currentTarget.dataset.price.split(",")//价格区间数组
      console.log(priceSection)
      // 点击改变样式
      let liArr = e.target.parentNode.children;
      for(let val of liArr){
        val.style.color = "dimgrey";
      };
      e.target.style.color = "white";
      // 发起区间请求
      this.$axios({
        method:"post",
        url:"http://localhost:3000/api/goodsection",
        data:{
          begin:priceSection[0],
          end:priceSection[1]
        },
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',  //指定消息格式
        },
      }).then(res=>{
        console.log(res.data)
        this.bus.$emit("resGoods",res.data)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li{
  list-style: none;
}
li{
  padding : 6px 0;
  color: dimgrey
}
li:hover{
  color:white;
  cursor:pointer;
}
li:first-child{
  color: white;
}
</style>
