<template>
    <div class="wrapper-page">
        <div class="panel panel-color panel-primary panel-pages">

            <div class="panel-heading bg-img"> 
                <div class="bg-overlay"></div>
                <h3 class="text-center m-t-10 text-white"> 重置密码 </h3>
            </div> 

            <div class="panel-body">
                <form method="post" role="form" class="text-center"> 
                    <div class="alert alert-info alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        输入 <b>你的邮箱</b> 将会给你发送一条验证消息
                    </div>
                    <div class="form-group m-b-0"> 
                        <div class="input-group"> 
                            <input type="email" class="form-control input-lg" placeholder="Enter Email" required="" v-model="eMail"> 
                            <span class="input-group-btn"> <button type="submit" class="btn btn-lg btn-primary waves-effect waves-light">重置</button> </span> 
                        </div> 
                    </div>   
                </form>
            </div>   
                
        </div>
    </div>
</template>

<script>
export default {
  name: "recoverypw",
  data() {
    return {
      eMail: ""
    };
  },
  mounted() {
    //xxx
  },
  methods: {
    //xxx
  }
};
</script>

<style scoped>
</style>
