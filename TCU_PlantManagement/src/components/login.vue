<template>
  <div>
    <!-- <p>用户名：<input type="text" v-model="userName"></p>
    <p>密  码：<input type="text" v-model="passWord"></p>
    <button @click="login()">登录</button> -->
     <div class="wrapper-page">
        <div class="panel panel-color panel-primary panel-pages">
            <div class="panel-heading bg-img">
                <div class="bg-overlay"></div>
                <h3 class="text-center m-t-10 text-white"> 天津城建大学 </h3>
                <br>
                <h3 style="color:white;font-size:30px;">校园植物信息管理系统</h3> 
            </div>

            <div class="panel-body">
                <form class="form-horizontal m-t-20">

                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control input-lg" type="text" required="" placeholder="用户名" v-model="userName">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control input-lg" type="password" required="" placeholder="密码" v-model="passWord">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="checkbox checkbox-primary">
                                <input id="checkbox-signup" type="checkbox">
                                <label for="checkbox-signup">
                                    记住我
                                </label>
                            </div>

                        </div>
                    </div>

                    <div class="form-group text-center m-t-40">
                        <div class="col-xs-12">
                            <button class="btn btn-primary btn-lg w-lg waves-effect waves-light" @click="login()">登录</button>
                        </div>
                    </div>

                    <div class="form-group m-t-30">
                        <div class="col-sm-7">
                            <a href="/#/recoverypw"><i class="fa fa-lock m-r-5"></i> 忘记密码？</a>
                        </div>
                        <div class="col-sm-5 text-right">
                            <a @click="register()" href="/#/register">创建新用户</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
    <remote-js src="./assets/js/modernizr.min.js"></remote-js>
    <remote-js src="./assets/js/jquery.min.js"></remote-js>
    <remote-js src="./assets/js/bootstrap.min.js"></remote-js>
    <remote-js src="./assets/js/detect.js"></remote-js>
    <remote-js src="./assets/js/fastclick.js"></remote-js>
    <remote-js src="./assets/js/jquery.slimscroll.js"></remote-js>
    <remote-js src="./assets/js/jquery.blockUI.js"></remote-js>
    <remote-js src="./assets/js/waves.js"></remote-js>
    <remote-js src="./assets/js/wow.min.js"></remote-js>
    <remote-js src="./assets/js/jquery.nicescroll.js"></remote-js>
    <remote-js src="./assets/js/jquery.scrollTo.min.js"></remote-js>
    <remote-js src="./assets/js/jquery.app.js"></remote-js>

    <remote-js src="./assets/plugins/sweetalert/dist/sweetalert.min.js"></remote-js>
    <remote-js src="./assets/pages/jquery.sweet-alert.init.js"></remote-js>
  </div>
</template>

<script>
var resizefunc = [];
export default {
  name: "logging",
  data() {
    return {
      userName: "",
      passWord: "",
      judge: ""
    };
  },
  mounted() {
    //alert(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    alert(to.params.id);
    next();
  },
  methods: {
    login: function() {
      this.axios({
        method: "post",
        url: `/api/users?judge=0&username=${this.userName}&password=${this.passWord}`
      })
        .then(res => {
          if(this.userName=='' || this.passWord==''){
              //判断输入用户名或者密码为空
          }else{
            this.content = res.data;
            //alert(JSON.stringify(res.data))
            if (res.data.length > 0) {
                var ses = window.sessionStorage;
                var d = JSON.stringify(res.data);
                ses.setItem("data", d);
                this.$router.push("/welcome");
            } else {
                alert("账号或者密码不正确！");
            }
          }
        })
        .catch(error => console.log(error));
    },
    register:function(){
        //this.$router.push('/register');
    }
  }
  
};

</script>

<style scoped>
</style>
