<template>
    <div class="wrapper">
        <div class="container">
            <!-- Page-Title -->
            <div class="row">
                <div class="col-sm-12">
                    <!-- <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"> 设置 <span class="m-l-5"><i class="fa fa-cog"></i></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div> -->
                    <h4 class="page-title">欢迎 !</h4>
                </div>
            </div>

            <!-- Start Widget -->
            <div class="row">
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bx-shadow bg-info">
                        <span class="mini-stat-icon">
                            <i class="ion-ios7-location"></i>
                        </span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">521</span>
                            总共植物数量
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">
                                    上周新增植株
                                    <span class="pull-right">23</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-purple bx-shadow">
                        <span class="mini-stat-icon">
                            <i class="md md-aspect-ratio"></i>
                        </span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">956</span>
                            总共校园风景
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">
                                    上周新增风景
                                    <span class="pull-right">59</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-primary bx-shadow">
                        <span class="mini-stat-icon">
                            <i class="md md-invert-colors-on"></i>
                        </span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">5210</span>
                            植物养护次数
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">
                                    上周养护次数
                                    <span class="pull-right">136</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-success bx-shadow">
                        <span class="mini-stat-icon">
                            <i class="ion-eye"></i>
                        </span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">20544</span>
                            总共系统访问量
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">
                                    最近访问量
                                    <span class="pull-right">1026</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End row-->

            <div class="row">
                <div class="col-lg-8">
                    <div class="portlet">
                        <!-- /portlet heading -->
                        <div class="portlet-heading">
                            <h3 class="portlet-title text-dark text-uppercase">校园植物位置图</h3>
                            <div class="portlet-widgets">
                                <a href="javascript:;" data-toggle="reload">
                                    <i class="ion-refresh"></i>
                                </a>
                                <span class="divider"></span>
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordion1"
                                    href="#portlet1"
                                >
                                    <i class="ion-minus-round"></i>
                                </a>
                                <span class="divider"></span>
                                <a href="#" data-toggle="remove">
                                    <i class="ion-close-round"></i>
                                </a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div id="portlet1" class="panel-collapse collapse in">
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div
                                            id="website-stats"
                                            style="position: relative;height: 400px"
                                        >
                                            <!-- 地图 -->
                                            <div id="app">
                                                <div id="allmap" ref="allmap"></div>
                                                <router-view></router-view>
                                            </div>
                                        </div>
                                        <div class="row text-center m-t-30">
                                            <div class="col-sm-4">
                                                <h4 class="counter">86,956</h4>
                                                <small class="text-muted">Weekly Report</small>
                                            </div>
                                            <div class="col-sm-4">
                                                <h4 class="counter">86,69</h4>
                                                <small class="text-muted">Monthly Report</small>
                                            </div>
                                            <div class="col-sm-4">
                                                <h4 class="counter">948,16</h4>
                                                <small class="text-muted">Yearly Report</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Portlet -->
                </div>
                <!-- end col -->

                <div class="col-lg-4">
                    <div class="portlet">
                        <!-- /portlet heading -->
                        <div class="portlet-heading">
                            <h3 class="portlet-title text-dark text-uppercase">校园植物位置图</h3>
                            <div class="portlet-widgets">
                                <a href="javascript:;" data-toggle="reload">
                                    <i class="ion-refresh"></i>
                                </a>
                                <span class="divider"></span>
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordion1"
                                    href="#portlet2"
                                >
                                    <i class="ion-minus-round"></i>
                                </a>
                                <span class="divider"></span>
                                <a href="#" data-toggle="remove">
                                    <i class="ion-close-round"></i>
                                </a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div id="portlet2" class="panel-collapse collapse in">
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="pie-chart">
                                            <div
                                                id="pie-chart-container"
                                                class="flot-chart"
                                                style="height: 400px"
                                            >
                                                <!-- 地图 -->
                                                <div id="app">
                                                    <div id="allmap" ref="allmap1"></div>
                                                    <router-view></router-view>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row text-center m-t-30">
                                            <div class="col-sm-6">
                                                <h4 class="counter">86,956</h4>
                                                <small class="text-muted">Weekly Report</small>
                                            </div>
                                            <div class="col-sm-6">
                                                <h4 class="counter">86,69</h4>
                                                <small class="text-muted">Monthly Report</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Portlet -->
                </div>
                <!-- end col -->
            </div>
            <!-- End row -->
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {};
    },
    mounted() {
        this.map();
        this.map_small()
    },
    methods: {
        map(){

            //GPS坐标
            var x = 117.088437;
            var y = 39.092823;
            var ggPoint = new BMap.Point(x, y);

            //主界面右侧小地图
            let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
            map.centerAndZoom(ggPoint, 16); // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.NavigationControl());

            //坐标转换完之后的回调函数
            function translateCallback(data){
            console.log(data);      
            if(data.status === 0) {
                    var marker = new BMap.Marker(data.points[0]);
                    map.addOverlay(marker);
                    // var label = new BMap.Label("叶武当前所在位置",{offset:new BMap.Size(20,-10)});
                    // marker.setLabel(label); //添加百度label
                    map.setCenter(data.points[0]);
                }
            }

            setTimeout(function(){
                var convertor = new BMap.Convertor();
                var pointArr = [];
                pointArr.push(ggPoint);
                convertor.translate(pointArr, 1, 5,translateCallback)          
            }, 1000);
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        },
        map_small() {

            //GPS坐标
            var x = 117.088437;
            var y = 39.092823;
            var ggPoint = new BMap.Point(x, y);

            //主界面右侧小地图
            let map1 = new BMap.Map(this.$refs.allmap1); // 创建Map实例
            map1.centerAndZoom(ggPoint, 16); // 初始化地图,设置中心点坐标和地图级别
            map1.addControl(new BMap.NavigationControl());

            //坐标转换完之后的回调函数
            function translateCallback(data){
            console.log(data);      
            if(data.status === 0) {
                    var marker = new BMap.Marker(data.points[0]);
                    map1.addOverlay(marker);
                    // var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
                    // marker.setLabel(label); //添加百度label
                    map1.setCenter(data.points[0]);
                }
            }

            setTimeout(function(){
                var convertor = new BMap.Convertor();
                var pointArr = [];
                pointArr.push(ggPoint);
                convertor.translate(pointArr, 1, 5,translateCallback)          
            }, 1000);
            map1.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        }
    }
};
</script>

<style scoped>
#app {
    color: #2c3e50;
    margin-top: 0px;
    height: 100%;
}
#allmap {
    height: 100%;
    overflow: hidden;
}
</style>
