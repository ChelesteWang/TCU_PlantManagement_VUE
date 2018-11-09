<template>
 <div class="wrapper">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Basic</h3>
                    </div>
                    <div class="panel-body">
                        <div id="gmaps-basic" class="gmaps">
                            <!-- 地图 -->
                            <div id="app">       
                                <!-- <div id="allmap" ref="allmap"></div> -->
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
 
<script>
export default {
  name: "App",
  methods: {
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(
        new BMap.MapTypeControl({
          //添加地图类型控件
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("天津"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
  },
  mounted() {
    this.map();
  }
};
</script>
 
<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}
#allmap {
  height: 100%;
  overflow: hidden;
}
</style>