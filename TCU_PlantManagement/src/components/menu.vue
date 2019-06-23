<template>
    <div class="">
      <!-- 头部 -->
      <header id="topnav">
        <div class="topbar-main ">
          <div class="container ">            
            <div class="topbar-left">                  
              <a href="#/menu" class="logo">
                <a href="" class="profile ">
                  <img :src=icon_src alt="user-img" class="user-img">
                </a>
                <span><router-link to="/menu/index" class="router">天津城建大学校园植物信息管理系统</router-link> </span>
              </a>
            </div>

            <div class="menu-extras">
              <ul class="nav navbar-nav navbar-right pull-right">
                <li>
                  <form role="search" class="navbar-left app-search pull-left hidden-xs">
                    <input type="text" placeholder="搜索..." class="form-control">
                    <a href=""><i class="fa fa-search"></i></a>
                  </form>
                </li>
                

                <li class="dropdown user-box">
                  <a href="" class="dropdown-toggle waves-effect waves-light profile " data-toggle="dropdown"
                    aria-expanded="true">
                    <img :src=icon_src alt="user-img" class="img-circle user-img">
                    <div class="user-status away"><i class="zmdi zmdi-dot-circle"></i></div>
                  </a>

                  <ul class="dropdown-menu">
                    <li><a href="javascript:void(0)"><i class="md md-face-unlock"></i> 简介</a></li>
                    <li><a href="javascript:void(0)"><i class="md md-settings"></i> 设置</a></li>
                    <li><a href="javascript:void(0)"><i class="md md-lock"></i> 锁屏</a></li>
                    <li @click="logout()"><a><i class="md md-settings-power"></i> 注销</a></li>
                  </ul>
                </li>
              </ul>
              <div class="menu-item">
                <a class="navbar-toggle">
                  <div class="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-custom">
          <div class="container">
            <div id="navigation">
              <ul class="navigation-menu">
                <li class="active">
                  <a href="#/menu"><i class="md md-home"></i> <span> 首页 </span> </a>
                </li>


                <li class="has-submenu">
                  <a href="#"><i class="md md-palette "></i><span> 植物管理 </span> </a>
                  <ul class="submenu">
                    <li><a href="#/menu/ke">乔类管理</a></li>
                    <li><a href="#/menu/shu">灌类管理</a></li>
                    <li><a href="#/menu/zhong">篱类管理</a></li>
                    <li><a href="#/menu/plant">植物列表</a></li>
                  </ul>
                </li>

                <li class="has-submenu">
                  <a href="#"><i class="md md-description "></i><span> 档案管理 </span> </a>
                  <ul class="submenu">
                    <li><a href="#/menu/doccreate">档案建立</a></li>
                    <li><a href="#/menu/doclist">档案列表</a></li>
                    <li><a href="#/menu/plantmap">植物地图</a></li>
                  </ul>
                </li>

                <li class="has-submenu">
                  <a href="#"><i class="md md-invert-colors-on"></i> <span> 养护管理 </span> </a>
                  <ul class="submenu">
                    <li><a href="javascript:void(0);">灌水与排水</a></li>
                    <li><a href="javascript:void(0);">施肥</a></li>
                    <li><a href="javascript:void(0);">苗木整形与修剪</a></li>
                    <li><a href="javascript:void(0);">防治病虫害</a></li>
                  </ul>
                </li>                

                <li class="has-submenu">
                  <a href="#"><i class="md md-aspect-ratio"></i> <span> 校园风景 </span> </a>
                  <ul class="submenu">
                    <li class="has-submenu">
                      <a href="#">中心湖附近</a>
                      <ul class="submenu">
                        <li><a href="javascript:void(0);">中心湖</a></li>
                        <li><a href="javascript:void(0);">鸭子湖</a></li>
                      </ul>
                    </li>

                    <li class="has-submenu">
                      <a href="#">体育馆附近</a>
                      <ul class="submenu">
                        <li><a href="javascript:void(0);"> 西门</a></li>
                        <li><a href="javascript:void(0);"> 体育馆</a></li>
                      </ul>
                    </li>

                    <li class="has-submenu">
                      <a href="#">滨湖道附近</a>
                      <ul class="submenu">
                        <li><a href="javascript:void(0);">滨湖道</a></li>
                        <li><a href="javascript:void(0);">二餐门口</a></li>
                        <li><a href="javascript:void(0);">小树林</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="has-submenu">
                  <a href="#"><i class="md md-turned-in-not"></i> <span> 反馈报修 </span> </a>
                  <ul class="submenu">
                    <li><a href="javascript:void(0);">植物反馈</a></li>
                  </ul>
                </li>     

                <li class="has-submenu">
                  <a href="#"><i class="md md-pages"></i><span>关于我们 </span> </a>
                  <ul class="submenu megamenu">
                    <li>
                      <ul>
                        <li><a href="javascript:void(0);">系统简介</a></li>
                        <li><a href="javascript:void(0);">部门介绍</a></li>
                        <li><a href="javascript:void(0);">功能介绍</a></li>
                        <li><a href="javascript:void(0);">反馈信息</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li><a href="http://www.tcu.edu.cn/">学校主页</a></li>
                        <li><a href="http://cwc.tcu.edu.cn/">财务处</a></li>
                        <li><a href="http://jwc.tcu.edu.cn/">教务处</a></li>
                        <li><a href="http://kyc.tcu.edu.cn/">科技处</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Part-->
      <div class="content">      
        <router-view></router-view>
      </div>
      <!-- End Content Part-->

      <!-- Footer -->
      <footer class="footer text-right yxfoot">
          <div class="container">
              <div class="row">
                  <div class="col-xs-6">
                      2018 © Yexuan.
                  </div>
                  <div class="col-xs-6">
                      <ul class="pull-right list-inline m-b-0">
                          <li>
                              <a href="#">关于</a>
                          </li>
                          <li>
                              <a href="#">帮助</a>
                          </li>
                          <li>
                              <a href="#">联系</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
    </div>
    
</template>

<script>
const s_alert = require("../utils/alert");
export default {
  name: "menus",
  data() {
    return {
      icon_src:
        "../../static/xx.png"
    };
  },
  mounted() {
    if (window.sessionStorage.data == null) {
      s_alert.basic("登录会话过期，请重新登录！");
      this.$router.push("/");
    } else {
      //默认加载 index
      this.$router.push("/menu/index");
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (window.sessionStorage.data) {
      next();
    } else {
      s_alert.basic("登录会话过期，请重新登录！");
      setTimeout(function() {
        next("/");
      }, 2000);
    }
  },
  methods: {
    logout() {
      window.sessionStorage.removeItem("data");
      s_alert.basic("注销成功！");
      setTimeout(function() {
        window.location.reload();
      }, 2000);
    }
  }
};
</script>

<style scoped>
.bc{
  background-color: black
}
.yxfoot {
  position: fixed;
  bottom: 0;
}
.content {
  margin-top: 150px;
  height: 100px;
}
.router {
  color: white;
  font-weight: normal;
}
</style>
