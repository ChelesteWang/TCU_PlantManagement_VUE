<template>
    <div>
        <!-- 头部 -->
        <header id="topnav">
            <div class="topbar-main">
                <div class="container">
                    <div class="topbar-left">
                        <a href="#/menu" class="logo">
                            <i class="md md-terrain"></i>
                            <span>
                                <router-link to="/menu/index" class="router">天津城建大学植物信息管理系统</router-link>
                            </span>
                        </a>
                    </div>
                    <div class="menu-extras">
                        <ul class="nav navbar-nav navbar-right pull-right">
                            <li>
                                <form
                                    role="search"
                                    class="navbar-left app-search pull-left hidden-xs"
                                >
                                    <input type="text" placeholder="搜索..." class="form-control" />
                                    <a href>
                                        <i class="fa fa-search"></i>
                                    </a>
                                </form>
                            </li>
                            <li class="dropdown hidden-xs">
                                <a
                                    href="#"
                                    data-target="#"
                                    class="dropdown-toggle waves-effect waves-light"
                                    data-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    <i class="md md-notifications"></i>
                                    <span class="badge badge-xs badge-danger">3</span>
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
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <div class="media">
                                                <div class="pull-left">
                                                    <em class="fa fa-bell-o fa-2x text-danger"></em>
                                                </div>
                                                <div class="media-body clearfix">
                                                    <div class="media-heading">更新</div>
                                                    <p class="m-0">
                                                        <small>
                                                            There are
                                                            <span class="text-primary">2</span> new updates available
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <small>显示所有的通知</small>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="dropdown user-box">
                                <a
                                    href
                                    class="dropdown-toggle waves-effect waves-light profile"
                                    data-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    <img :src="icon_src" alt="user-img" class="img-circle user-img" />
                                    <div class="user-status away">
                                        <i class="zmdi zmdi-dot-circle"></i>
                                    </div>
                                </a>

                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="md md-face-unlock"></i> 简介
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="md md-settings"></i> 设置
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="md md-lock"></i> 锁屏
                                        </a>
                                    </li>
                                    <li @click="logout()">
                                        <a>
                                            <i class="md md-settings-power"></i> 注销
                                        </a>
                                    </li>
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
                                <a href="#/menu">
                                    <i class="md md-home"></i>
                                    <span>首页</span>
                                </a>
                            </li>

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="md md-palette"></i>
                                    <span>植物管理</span>
                                </a>
                                <ul class="submenu">
                                    <li>
                                        <a href="javascript:void(0);">科类管理</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">属类管理</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">种类管理</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">植物列表</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="md md-description"></i>
                                    <span>档案管理</span>
                                </a>
                                <ul class="submenu">
                                    <li>
                                        <a href="#/menu/doccreate">档案建立</a>
                                    </li>
                                    <li>
                                        <a href="#/menu/docsupport">档案维护</a>
                                    </li>
                                    <li>
                                        <a href="#/menu/docSearch">档案查询</a>
                                    </li>
                                    <li>
                                        <a href="#/menu/doclist">档案列表</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="md md-invert-colors-on"></i>
                                    <span>养护管理</span>
                                </a>
                                <ul class="submenu">
                                    <li>
                                        <a href="grid.html">灌水与排水</a>
                                    </li>
                                    <li>
                                        <a href="portlets.html">施肥</a>
                                    </li>
                                    <li>
                                        <a href="widgets.html">苗木整形与修剪</a>
                                    </li>
                                    <li>
                                        <a href="nestable-list.html">防治病虫害</a>
                                    </li>
                                    <li>
                                        <a href="ui-sliders.html">Sliders</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-submenu">
                                <a href="#">
                                    <i class="md md-turned-in-not"></i>
                                    <span>植物分类</span>
                                </a>
                                <ul class="submenu">
                                    <li class="has-submenu">
                                        <a href="#">茎的形态</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="material-icon.html">乔木</a>
                                            </li>
                                            <li>
                                                <a href="ion-icons.html">灌木</a>
                                            </li>
                                            <li>
                                                <a href="font-awesome.html">亚灌木</a>
                                            </li>
                                            <li>
                                                <a href="font-awesome.html">草本植物</a>
                                            </li>
                                            <li>
                                                <a href="font-awesome.html">藤本植物</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="has-submenu">
                                        <a href="#">生态习性</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="gmap.html">陆生植物</a>
                                            </li>
                                            <li>
                                                <a href="vector-map.html">水生植物</a>
                                            </li>
                                            <li>
                                                <a href="font-awesome.html">附生植物</a>
                                            </li>
                                            <li>
                                                <a href="font-awesome.html">寄生植物</a>
                                            </li>
                                            <li>
                                                <a href="font-awesome.html">腐生植物</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="has-submenu">
                                        <a href="#">生活周期</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="inbox.html">一年生植物</a>
                                            </li>
                                            <li>
                                                <a href="email-compose.html">二年生植物</a>
                                            </li>
                                            <li>
                                                <a href="email-read.html">多年生植物</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="md md-aspect-ratio"></i>
                                    <span>校园风景</span>
                                </a>
                                <ul class="submenu">
                                    <li class="has-submenu">
                                        <a href="#">中心湖附近</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="material-icon.html">中心湖</a>
                                            </li>
                                            <li>
                                                <a href="ion-icons.html">鸭子湖</a>
                                            </li>
                                            <li>
                                                <a href="font-awesome.html">Font awesome</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="has-submenu">
                                        <a href="#">体育馆附近</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="gmap.html">西门</a>
                                            </li>
                                            <li>
                                                <a href="vector-map.html">体育馆</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="has-submenu">
                                        <a href="#">滨湖道附近</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="inbox.html">滨湖道</a>
                                            </li>
                                            <li>
                                                <a href="email-compose.html">二餐门口</a>
                                            </li>
                                            <li>
                                                <a href="email-read.html">小树林</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="has-submenu">
                                <a href="#">
                                    <i class="md md-pages"></i>
                                    <span>关于我们</span>
                                </a>
                                <ul class="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="profile.html">系统简介</a>
                                            </li>
                                            <li>
                                                <a href="timeline.html">部门介绍</a>
                                            </li>
                                            <li>
                                                <a href="invoice.html">功能介绍</a>
                                            </li>
                                            <li>
                                                <a href="email-template.html">反馈信息</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="http://www.tcu.edu.cn/">学校主页</a>
                                            </li>
                                            <li>
                                                <a href="http://cwc.tcu.edu.cn/">财务处</a>
                                            </li>
                                            <li>
                                                <a href="http://jwc.tcu.edu.cn/">教务处</a>
                                            </li>
                                            <li>
                                                <a href="http://kyc.tcu.edu.cn/">科技处</a>
                                            </li>
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
                    <div class="col-xs-6">2018 © Yexuan.</div>
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
const cookie = require("../utils/cookie");
const s_alert = require("../utils/alert");
const ses = require("../utils/ses");
const print = require("../utils/print");
const apis = require("../interface/apis");

import { mapMutations } from 'vuex'

export default {
    name: "menus",
    data() {
        return {
            icon_src:
                "http://ww3.sinaimg.cn/thumb300/005NL6H7gw1ew1tp2et08j30cj0dl0tq.jpg"
        };
    },
    mounted() {
        //默认加载 index
        this.$router.push("/menu/index");
    },
    methods: {
        ...mapMutations(['LOGOUT']),
        logout() {
            this.LOGOUT();
            s_alert.basic("注销成功！");
            setTimeout(function() {
                window.location.href="/";
            }, 2000);
        }
    }
};
</script>

<style scoped>
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
