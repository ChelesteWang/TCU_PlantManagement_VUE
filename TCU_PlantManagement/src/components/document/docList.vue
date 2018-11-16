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
                                <tr class="gradeX" v-for="(item,index) in items" :key="item.id">
                                    <td> 
                                        <input class="checkbox" type="checkbox" v-model="select" :value="index" name="jc">
                                    </td>
                                    <td>TCJ_2018_01_pinus</td>
                                    <td>松树</td>
                                    <td>常绿树</td>
                                    <td>Pinus</td>
                                    <td>松科</td>
                                    <td>松属</td>
                                    <td>松树</td>
                                    <td>松树为雌雄同株植物，而且孢子叶成球果状排列，叶成针状，常2针、3针或5针一束。</td>
                                    <td>适宜酸性土壤，喜光树种，耐阴性弱，具有旱生结构</td>
                                    <td>观赏、工业、药用</td>
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
                        <div class="dataTables_info" id="datatable-editable_info" role="status" aria-live="polite">展示 10 总共 66 项</div>
                        </div>
                        <div class="col-sm-6">
                            <div class="dataTables_paginate paging_simple_numbers" id="datatable-editable_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button previous disabled" aria-controls="datatable-editable" tabindex="0" id="datatable-editable_previous">
                                        <a href="#">上一页</a>
                                    </li>
                                    <li class="paginate_button active" aria-controls="datatable-editable" tabindex="0">
                                        <a href="#">1</a>
                                    </li>
                                    <li class="paginate_button " aria-controls="datatable-editable" tabindex="0">
                                        <a href="#">2</a>
                                    </li>
                                    <li class="paginate_button previous" aria-controls="datatable-editable" tabindex="0" id="datatable-editable_previous">
                                        <a href="#" @click="show()">下一页</a>
                                    </li>
                                </ul>
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
  name: "doclist",
  data() {
    return {
      items: {
        cs1: 1,
        cs2: 2,
        cs3: 3
      },
      select:[]
    };
  },
  methods: {
    toDocCreate() {
      this.$router.push("doccreate");
    },
    show(){
        alert(this.select);
    },
    selcetAll(){
        $('[name="jc"]').prop('checked',true);
    }
  }
};
</script>

<style>
</style>
