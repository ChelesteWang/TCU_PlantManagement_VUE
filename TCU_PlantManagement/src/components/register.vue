<template>
  <div>
    <!-- coding... -->
    <div class="wrapper-page">
      <div class="panel panel-color panel-primary panel-pages">
          <div class="panel-heading bg-img"> 
              <div class="bg-overlay"></div>
              <h3 class="text-center m-t-10 text-white"> 创建新用户 </h3>
          </div> 

          <div class="panel-body">
          <div class="form-horizontal m-t-20">
              <div class="form-group">
                  <div class="col-xs-12">
                      <input class="form-control input-lg" type="email" required="" placeholder="邮箱" v-model="eMail">
                  </div>
              </div>
              
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
                          <input id="checkbox-signup" type="checkbox" v-model="check">
                          <label for="checkbox-signup">
                              接受 <a href="#">天津城建大学 校园植物信息管理系统 条例</a>
                          </label>
                      </div>
                      
                  </div>
              </div>
              
              <div class="form-group text-center m-t-40">
                  <div class="col-xs-12">
                      <button class="btn btn-primary waves-effect waves-light btn-lg w-lg" @click="register()">注册</button>
                  </div>
              </div>

              <div class="form-group m-t-30">
                  <div class="col-sm-12 text-center">
                      <a href="/">已经拥有账号</a>
                  </div>
              </div>
          </div> 
        </div>                                 
                
      </div>
    </div>
  </div>
</template>

<script>
const s_alert = require("../utils/alert");
export default {
  name: "register",
  data() {
    return {
      content: "",
      userName: "",
      passWord: "",
      eMail: "",
      check: true
    };
  },
  mounted() {
    //xxx
  },
  methods: {
    register() {
      if (this.userName == "" || this.passWord == "" || this.eMail == "") {
        s_alert.basic("不能有空哦");
      } else {
        if (this.check) {
          this.axios({
            method: "post",
            url: `/api/users?judge=2&username=${this.userName}&password=${
              this.passWord
            }`
          })
            .then(res => {
              if (JSON.stringify(res.data.affectedRows) == 1) {
                s_alert.Success("注册成功", "正在加载……", "success");
                this.$router.push("/");
              }
            })
            .catch(error => console.log(error));
        }else{
            s_alert.basic("必须接受 天津城建大学 校园植物信息管理系统 条例");
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
