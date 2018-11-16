<template>
    <div class="container">
        <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-default">
                <div class="panel-heading"><h3 class="panel-title">天津城建大学 植物档案信息 新增档案</h3></div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="col-md-2 control-label">档案编号</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="TCU_2018_xxx" v-model="plantid">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email" >书名</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="樱花树" v-model="academicname">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">别名</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="小樱花树" v-model="alias">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">拉丁名</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="拉丁樱花树" v-model="latinname">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">所属科</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="family">
                                    <option>蔷薇科</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                             <label class="col-sm-2 control-label">所属属</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="genera">
                                    <option>樱属</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">所属种</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="specie">
                                    <option>樱花树</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">形态</label>
                            <div class="col-md-10">
                                <textarea class="form-control" v-model="morphology" rows="5" placeholder="高约1.05～25米。树皮暗栗褐色.早樱树皮白色,光滑而有光泽，具横纹。小枝无毛。叶卵形至卵状椭圆形，边缘具芒半成熟齿，两面无毛。叶表面深绿色，富有光泽，背面稍淡。托叶披针状线形，边缘细裂呈锯齿状，裂端有腺。花每支有三五朵，伞房状或总状花序，萼片水平开展，花瓣先端有缺刻花白色或淡粉红色。径2.5～4cm，花期早樱花期1月～年末12月晚樱花期3月～年末10月一般樱花花期3月～5月。"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">习性</label>
                            <div class="col-md-10">
                                <textarea class="form-control" v-model="habit" rows="5" placeholder="性喜温暖、湿润偏干的环境。要求充足的阳光，不耐阴湿，不耐盐碱，忌水涝，耐寒，耐旱，花期怕大风和烟尘。适宜在疏松、肥沃、排水良好的微酸性或中性的沙质壤土中生长。"></textarea>
                            </div>
                        </div><div class="form-group">
                            <label class="col-md-2 control-label">用途</label>
                            <div class="col-md-10">
                                <textarea class="form-control" v-model="purpose" rows="5" placeholder="樱花是早春重要的观花树种，被广泛用于园林观赏。樱花可以群植成林，也可植于山坡、庭院、路边、建筑物前。盛开时节花繁艳丽，满树烂漫，如云似霞，极为壮观。可大片栽植造成“花海”景观，可三五成丛点缀于绿地形成锦团，也可孤植，形成“万绿丛中一点红”之画意。樱花还可作小路行道树、绿篱或制作盆景。"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-10">
                            <button type="button" class="btn btn-block btn-lg btn-success waves-effect waves-light" @click="submitForm()">提交</button>
                            </div>
                        </div>
                    </form>
                </div> <!-- panel-body -->
            </div> <!-- panel -->
        </div> <!-- col -->
    </div> <!-- End row -->
    </div>
</template>

<script>
const s_alert = require("../../utils/alert");
import app from "../../App.vue";

export default {
  name: "docCreate",
  data() {
    return {
      plantid: "",
      academicname: "",
      alias: "",
      latinname: "",
      family: "",
      genera: "",
      specie: "",
      morphology: "",
      habit: "",
      purpose: ""
    };
  },
  methods: {
    submitForm() {
      if (this.plantid == "" || this.academicname == ""|| this.alias == ""|| this.latinname == ""|| this.family == ""
        || this.genera == ""|| this.specie == ""|| this.morphology == ""|| this.habit == ""|| this.purpose == "") {
        s_alert.basic("某一项输入为空！");
      } else {
        s_alert.Timer("ok", "ok");
        this.submitplant();        
      }
    },
    submitplant(){
        var str= `${app.data().globleUrl}/plants?judge=1&plantid=${this.plantid}&aname=${this.academicname}&alias=${this.alias}&lname=${this.latinname}&family=${this.family}&genera=${this.genera}&specie=${this.specie}&morphology=${this.morphology}&habit=${this.habit}&purpose=${this.purpose}`;
        this.axios({
          method: "post",
          url: str
        })
          .then(res => {
            console.log(res.data.affectedRows);
            if (res.data.affectedRows == 1) {
                s_alert.Success("档案添加成功", "正在加载……", "success");
                //this.$router.push("/menu");
            } else {
              s_alert.Timer("档案添加失败", "。。。");
            }
          })
          .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
