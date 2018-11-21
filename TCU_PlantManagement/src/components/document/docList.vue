<template>
    <div class="wrapper">
        <div class="container">
            
            <div class="row">
                <div class="col-sm-12">
                    <h4 class="page-title"> 档案列表 </h4>
                </div>
            </div>

            <div class="panel">

                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="m-b-30">
                                <button id="addToTable" class="btn btn-primary waves-effect waves-light" @click="toDocCreate()"> 新增植物档案 <i class="fa fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="dataTables_length" id="datatable-editable_length">
                                <label>显示 
                                    <select name="datatable-editable_length" aria-controls="datatable-editable" class="form-control input-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> 
                                    项
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div id="datatable-editable_filter" class="dataTables_filter" style="margin-right:45px;">
                                <label>搜索:
                                    <input type="search" class="form-control input-sm" placeholder="">
                                </label>
                            </div>
                        </div>
                    </div>
                        <table class="table table-bordered table-striped" id="datatable-editable">
                            <thead>
                                <tr>
                                    <th><i @click="selcetAll()">选择</i></th>
                                    <th>植株ID</th>
                                    <th>书名</th>
                                    <th>别名</th>
                                    <th>拉丁名</th>
                                    <th>科</th>
                                    <th>属</th>
                                    <th>种</th>
                                    <th>形态</th>
                                    <th>习性</th>
                                    <th>用途</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="gradeX" v-for="(item,index) in showItems" :key="item.id">
                                    <td align="center"> 
                                        <input type="checkbox" v-model="select" @change="indexSelect(index)" :value="item.plantid" name="jc">
                                    </td>
                                    <td>{{item.plantid}}</td>
                                    <td>{{item.aname}}</td>
                                    <td>{{item.alias}}</td>
                                    <td>{{item.lname}}</td>
                                    <td>{{item.family}}</td>
                                    <td>{{item.genera}}</td>
                                    <td>{{item.specie}}</td>
                                    <td>{{item.morphology}}</td>
                                    <td>{{item.habit}}</td>
                                    <td>{{item.purpose}}</td>
                                    <td class="actions">
                                        <a href="#" class="hidden on-editing save-row"><i class="fa fa-save"></i></a>
                                        <a href="#" class="hidden on-editing cancel-row"><i class="fa fa-times"></i></a>
                                        <a href="#" class="on-default edit-row"><i class="fa fa-pencil"></i></a>
                                        <a href="#" class="on-default remove-row"><i class="fa fa-trash-o"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    <div class="row"><div class="col-sm-6">
                        <div class="dataTables_info" id="datatable-editable_info" role="status" aria-live="polite">展示 10 总共 {{items.length}} 项</div>
                        </div>
                        <div class="col-sm-6">
                            <div class="dataTables_paginate paging_simple_numbers" id="datatable-editable_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button previous disabled" id="datatable-editable_previous">
                                        <a href="#">上一页</a>
                                    </li>
                                    <li class="paginate_button" v-for="(item,index) in sumPage" :key="index" :class="{ active: currentPage==index }">
                                        <a @click="switchPage(index)">{{++index}}</a>
                                    </li>
                                    <li class="paginate_button previous">
                                        <a href="#" @click="show()">下一页</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div style="margin-top:100px"></div>

        </div>
    </div>
        
</template>

<script>
export default {
  name: "doclist",
  data() {
    return {
      items: [],
      showItems:[],
      select: [],
      isSelectedAll: false,
      PageShowSum: 10,
      currentPage: "0",
      sumPage: 1
    };
  },
  mounted() {
    this.mockcs();
  },
  methods: {
    toDocCreate() {
      this.$router.push("doccreate");
    },
    show() {
      alert(this.select);
    },
    selcetAll() {
      //$('[name="jc"]').prop('checked',true);
      if (!this.isSelectedAll) {
        this.items.forEach(item => {
          this.select.push(item.plantid);
          this.isSelectedAll = true;
        });
      } else if (this.isSelectedAll) {
        this.select = [];
        this.isSelectedAll = false;
      }
    },
    mockcs() {
      this.axios
        .post("/news/api", { withCredentials: true })
        .then(res => {
          // console.log(res.data)
          this.items = res.data;
          this.sumPage = Math.ceil(res.data.length / this.PageShowSum);
          //页面加载完成，默认加载第一页
          this.showEachPage(1);
          console.log("当前数据分页为：--->", this.sumPage);
        })
        .catch(err => {
          console.log(err);
        });
    },
    indexSelect(index) {
    //   alert(index);
    },
    switchPage(page) {
        let p=page-1;
        this.currentPage = `${p}`;
        console.log(this.currentPage)
        this.showEachPage(page);
    },
    showEachPage(page){
        let all=this.items;
        this.showItems=[];
        for(let i=(page-1)*10;i<page*10;i++){
            if(all[i]==null){
                break;
            }else{
            this.showItems.push(all[i]);
            }
        }
        console.log(page,this.showItems)
    }
  }
};
</script>

<style>

</style>