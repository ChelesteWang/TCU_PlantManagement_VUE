<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>

    <h5>按钮+bootstrap</h5>
    <button class="btn btn-primary" @click="show">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    <hr>

    <h5>几种router的传递方式</h5>
    <router-link to="/init">Home</router-link>
    <router-link to="/login/1">login</router-link>
    <a @click="router('router')">router</a>
    <router-link :to="{ name: 'login', params: { id: 'to_name' }}">to_name</router-link>
    <router-link :to="{ path: '/login/path' }">path</router-link>
    <hr>

    <h5>引入外部css或者文件内css</h5>
    <div class="cs"></div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'App',
  methods: {
    show: function(){
        alert("测试APP.VUE...");
    },
    router(uid) {
        this.$router.push({ path: `/login/${uid}` });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cs{
  margin-top: 10px;
  background-color: black;
  height: 20px;
}
</style>
