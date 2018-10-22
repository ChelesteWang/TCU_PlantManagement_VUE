<template>
  <div class="hello" >
    <button class="btn btn-primary" @click="show">登录测试</button>
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      
    };
  },
  mounted() {
    alert(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next){
      alert(to.params.id);
      next();
  },
  methods: {
    show: function(){
        alert("login");
    },
  }
};
</script>

<style scoped>

</style>
