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
                                    <select class="form-control input-sm" v-model="PageShowSum" @change="changePageShowSum()">
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
                                    <input type="search" class="form-control input-sm search-input" placeholder="请输入植物书名" @input="doSearch($event)" v-model="doSearchText">
                                </label>
                            </div>
                        </div>
                    </div>
                        <table class="table table-bordered table-striped" style="" id="datatable-editable">
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
                                        <a class="on-default edit-row" @click="editItem(index)"><i class="fa fa-pencil"></i></a>
                                        <a class="on-default remove-row" @click="deleteItem(index)"><i class="fa fa-trash-o"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>                       
                    <div class="row">
                        <div class="col-sm-6">
                        <div class="dataTables_info" id="datatable-editable_info" role="status" aria-live="polite">展示 {{PageShowSum}} 总共 {{items.length}} 项</div>
                        </div>
                        <div class="col-sm-6">
                            <div class="dataTables_paginate paging_simple_numbers" id="datatable-editable_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button previous" :class="{ disabled: currentPage=='0' }">
                                        <a @click="previousPage()">上一页</a>
                                    </li>
                                    <li class="paginate_button" v-for="(item,index) in sumPage" :key="index" :class="{ active: currentPage==index }">
                                        <a @click="switchPage(index)">{{++index}}</a>
                                    </li>
                                    <li class="paginate_button next" :class="{ disabled: currentPage==sumPage-1 }">
                                        <a @click="nextPage()">下一页</a>
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
const s_alert = require("../../utils/alert");
export default {
  name: "doclist",
  data() {
    return {
      items: [],
      filterItems: [],
      showItems: [],
      select: [],
      isSelectedAll: false,
      PageShowSum: 10,
      currentPage: "0",
      sumPage: null,
      doSearchText: null
    };
  },
  mounted() {
    this.mockcs();
  },
  methods: {
    toDocCreate() {
      this.$router.push("doccreate");
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
          this.show();
        })
        .catch(err => {
          console.log(err);
        });
    },
    show() {
      this.sumPage = Math.ceil(this.items.length / this.PageShowSum);
      //页面加载完成，默认加载第一页
      let p = Number(this.currentPage) + 1;
      this.showEachPage(p);
      console.log("当前数据总页为：--->", this.sumPage);
    },
    switchPage(page) {
      let p = page - 1;
      this.currentPage = `${p}`;
      console.log("当前-->", page);
      this.showEachPage(page);
    },
    showEachPage(page) {
      let all = this.items;
      this.showItems = [];
      for (
        let i = (page - 1) * this.PageShowSum;
        i < page * this.PageShowSum;
        i++
      ) {
        if (all[i] == null) {
          break;
        } else {
          this.showItems.push(all[i]);
        }
      }
    },
    nextPage() {
      if (this.currentPage == this.sumPage - 1) {
        s_alert.basic("已经到达最后一页了……");
      } else {
        let p = Number(this.currentPage) + 1;
        this.currentPage = `${p}`;
        console.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    },
    previousPage() {
      if (this.currentPage == "0") {
        s_alert.basic("已经到达最前面了……");
      } else {
        let p = Number(this.currentPage) - 1;
        this.currentPage = `${p}`;
        console.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    },
    editItem(index) {
      alert("edit" + JSON.stringify(this.showItems[index]));
    },
    deleteItem(index) {
      // alert('delete'+index)
      var j = confirm("确认删除吗？");
      if (j) {
        this.showItems.splice(index, 1);
        this.items.splice(this.currentPage * this.PageShowSum + index, 1);
        this.show();
      }
    },
    changePageShowSum() {
      this.currentPage = "0";
      this.show();
    },
    doSearch(e) {
      console.log(this.doSearchText);
      // this.showItems=[]
      // for(let i=0;i<this.items.length;i++){
      //     if(String(this.items[i].plantid).indexOf(this.doSearchText)==-1){
      //         // console.log(String(this.items[i].plantid).indexOf(this.doSearchText))
      //     }else{
      //         this.showItems.concat(this.items[i])
      //         console.log(this.items[i])
      //     }
      // }
    }
  }
};
</script>
<style scoped>
.searchinfo {
  display:block;
  margin-top: -650px;
}
</style>