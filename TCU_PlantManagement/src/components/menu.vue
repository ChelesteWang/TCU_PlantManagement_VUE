<template>
    <div>
      <!-- Navigation Bar-->
      <header id="topnav">
        <div class="topbar-main">
          <div class="container">

            <!-- LOGO -->
            <div class="topbar-left">
              <a href="#/menu" class="logo"><i class="md md-terrain"></i> <span><router-link to="/menu/index" class="router">天津城建大学植物信息管理系统</router-link> </span></a>
            </div>
            <!-- End Logo container-->

            <div class="menu-extras">

              <ul class="nav navbar-nav navbar-right pull-right">
                <li>
                  <form role="search" class="navbar-left app-search pull-left hidden-xs">
                    <input type="text" placeholder="Search..." class="form-control">
                    <a href=""><i class="fa fa-search"></i></a>
                  </form>
                </li>
                <li class="dropdown hidden-xs">
                  <a href="#" data-target="#" class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                    aria-expanded="true">
                    <i class="md md-notifications"></i> <span class="badge badge-xs badge-danger">3</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg">
                    <li class="text-center notifi-title">通知</li>
                    <li class="list-group">
                      <!-- list item-->
                      <a href="javascript:void(0);" class="list-group-item">
                        <div class="media">
                          <div class="pull-left">
                            <em class="fa fa-user-plus fa-2x text-info"></em>
                          </div>
                          <div class="media-body clearfix">
                            <div class="media-heading">新用户申请</div>
                            <p class="m-0">
                              <small>You have 10 unread messages</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <!-- list item-->
                      <a href="javascript:void(0);" class="list-group-item">
                        <div class="media">
                          <div class="pull-left">
                            <em class="fa fa-diamond fa-2x text-primary"></em>
                          </div>
                          <div class="media-body clearfix">
                            <div class="media-heading">新设置</div>
                            <p class="m-0">
                              <small>There are new settings available</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <!-- list item-->
                      <a href="javascript:void(0);" class="list-group-item">
                        <div class="media">
                          <div class="pull-left">
                            <em class="fa fa-bell-o fa-2x text-danger"></em>
                          </div>
                          <div class="media-body clearfix">
                            <div class="media-heading">更新</div>
                            <p class="m-0">
                              <small>There are
                                <span class="text-primary">2</span> new updates available</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <!-- last list item -->
                      <a href="javascript:void(0);" class="list-group-item">
                        <small>显示所有的通知</small>
                      </a>
                    </li>
                  </ul>
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
                <!-- Mobile menu toggle-->
                <a class="navbar-toggle">
                  <div class="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
                <!-- End mobile menu toggle-->
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-custom">
          <div class="container">
            <div id="navigation">
              <!-- Navigation Menu-->
              <ul class="navigation-menu">
                <li class="active">
                  <a href="#/menu"><i class="md md-home"></i> <span> 首页 </span> </a>
                </li>


                <li class="has-submenu">
                  <a href="#"><i class="md md-palette "></i><span> 植物管理 </span> </a>
                  <ul class="submenu">
                    <li><a href="javascript:void(0);">科类管理</a></li>
                    <li><a href="javascript:void(0);">属类管理</a></li>
                    <li><a href="javascript:void(0);">种类管理</a></li>
                    <li><a href="javascript:void(0);">Tabs &amp; Accordions</a></li>
                  </ul>
                </li>

                <li class="has-submenu">
                  <a href="#"><i class="md md-invert-colors-on"></i> <span> 养护管理 </span> </a>
                  <ul class="submenu">
                    <li><a href="grid.html">Grid</a></li>
                    <li><a href="portlets.html">Portlets</a></li>
                    <li><a href="widgets.html">Widgets</a></li>
                    <li><a href="nestable-list.html">Nesteble</a></li>
                    <li><a href="ui-sliders.html">Sliders </a></li>
                    <li><a href="gallery.html">Gallery </a></li>
                    <li><a href="pricing.html">Pricing Table </a></li>
                    <li><a href="calendar.html">Calendar </a></li>
                  </ul>
                </li>

                <li class="has-submenu">
                  <a href="#"><i class="md md-redeem"></i> <span> 校园风景 </span> </a>
                  <ul class="submenu">
                    <li class="has-submenu">
                      <a href="#">Icons</a>
                      <ul class="submenu">
                        <li><a href="material-icon.html">Material Design</a></li>
                        <li><a href="ion-icons.html">Ion Icons</a></li>
                        <li><a href="font-awesome.html">Font awesome</a></li>
                      </ul>
                    </li>

                    <li class="has-submenu">
                      <a href="#">Forms</a>
                      <ul class="submenu">
                        <li><a href="form-elements.html">General Elements</a></li>
                        <li><a href="form-validation.html">Form Validation</a></li>
                        <li><a href="form-advanced.html">Advanced Form</a></li>
                        <li><a href="form-wizard.html">Form Wizard</a></li>
                        <li><a href="form-editor.html">WYSIWYG Editor</a></li>
                        <li><a href="code-editor.html">Code Editors</a></li>
                        <li><a href="form-uploads.html">Multiple File Upload</a></li>
                        <li><a href="form-xeditable.html">X-editable</a></li>
                      </ul>
                    </li>

                    <li class="has-submenu">
                      <a href="#">Tables</a>
                      <ul class="submenu">
                        <li><a href="tables.html">Basic Tables</a></li>
                        <li><a href="table-datatable.html">Data Table</a></li>
                        <li><a href="tables-editable.html">Editable Table</a></li>
                        <li><a href="responsive-table.html">Responsive Table</a></li>
                      </ul>
                    </li>

                    <li class="has-submenu">
                      <a href="#">Charts</a>
                      <ul class="submenu">
                        <li><a href="morris-chart.html">Morris Chart</a></li>
                        <li><a href="chartjs.html">Chartjs</a></li>
                        <li><a href="flot-chart.html">Flot Chart</a></li>
                        <li><a href="peity-chart.html">Peity Charts</a></li>
                        <li><a href="charts-sparkline.html">Sparkline Charts</a></li>
                        <li><a href="chart-radial.html">Radial charts</a></li>
                        <li><a href="other-chart.html">Other Chart</a></li>
                      </ul>
                    </li>

                    <li class="has-submenu">
                      <a href="#">Maps</a>
                      <ul class="submenu">
                        <li><a href="gmap.html"> Google Map</a></li>
                        <li><a href="vector-map.html"> Vector Map</a></li>
                      </ul>
                    </li>

                    <li class="has-submenu">
                      <a href="#">Mail</a>
                      <ul class="submenu">
                        <li><a href="inbox.html">Inbox</a></li>
                        <li><a href="email-compose.html">Compose Mail</a></li>
                        <li><a href="email-read.html">View Mail</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="has-submenu">
                  <a href="#"><i class="md md-pages"></i><span>关于我们 </span> </a>
                  <ul class="submenu megamenu">
                    <li>
                      <ul>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="timeline.html">Timeline</a></li>
                        <li><a href="invoice.html">Invoice</a></li>
                        <li><a href="email-template.html">Email template</a></li>
                        <li><a href="contact.html">Contact-list</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="recoverpw.html">Recover Password</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li><a href="lock-screen.html">Lock Screen</a></li>
                        <li><a href="blank.html">Blank Page</a></li>
                        <li><a href="maintenance.html">Maintenance</a></li>
                        <li><a href="coming-soon.html">Coming-soon</a></li>
                        <li><a href="404.html">404 Error</a></li>
                        <li><a href="404_alt.html">404 alt</a></li>
                        <li><a href="500.html">500 Error</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

              </ul>
              <!-- End navigation menu  -->
            </div>
          </div>
        </div>
      </header>
      <!-- End Navigation Bar-->

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
      <!-- End Footer -->
    </div>
    
</template>

<script>
const s_alert = require("../utils/alert");
export default {
  name:'menu',
  data(){
    return{
      icon_src:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLvDauOxz0icWPgpFju1mFwqZ3Rf0X1gicanO0syyx3Zw0YyRPk2BPaIcjEzicBeFvV3ewpaWsI9jxw/132',
    }
  },
  mounted() {
    if(window.sessionStorage.data==null){
        s_alert.basic("登录会话过期，请重新登录！");
        this.$router.push('/')
      }else{
        //默认加载 index
        this.$router.push('/menu/index')
      }
  },
  beforeRouteUpdate(to, from, next){
      if(window.sessionStorage.data){
          next();
      }else{
          s_alert.basic("登录会话过期，请重新登录！");
          setTimeout(function(){
            next('/')
          },2000)
      }
  },
  methods:{
    logout (){
          window.sessionStorage.removeItem('data');
          s_alert.basic("注销成功！");
          setTimeout(function(){
            window.location.reload();
          },2000)
      }
  }
};
</script>

<style scoped>
.yxfoot {
  position: fixed;
  bottom: 0;
}
.content{
  margin-top: 150px;
}
.router{
  color: white;
  font-weight: normal;
}
</style>
