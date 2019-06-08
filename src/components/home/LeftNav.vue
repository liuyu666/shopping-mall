<template>
  <div class="leftnav">
      <ul class="moneyList">
          <li v-for="item in list" :key="item" @click="changeMoney">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  data () {
    return {
        list:["All","0-100","100-500","500-1000","1000-2000","2000-5000","5000以上"],
    }
  },
  methods:{
    changeMoney(e){
      console.log(e.target.parentNode.children);
      console.log(e.target.parentNode.childNodes);
      let liArr = e.target.parentNode.children;
      for(let val of liArr){
        val.style.color = "dimgrey";
      };
      e.target.style.color = "white";
      console.log(e);
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
