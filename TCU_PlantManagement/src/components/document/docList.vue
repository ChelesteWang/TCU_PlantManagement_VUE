<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h4 class="page-title">档案列表</h4>
                </div>
            </div>
            <div class="panel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="m-b-30">
                                <button
                                    id="addToTable"
                                    class="btn btn-primary waves-effect waves-light"
                                    @click="toDocCreate()"
                                >
                                    新增植物档案
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="dataTables_length" id="datatable-editable_length">
                                <label>
                                    显示
                                    <select
                                        class="form-control input-sm"
                                        v-model="PageShowSum"
                                        @change="changePageShowSum()"
                                    >
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
                            <div
                                id="datatable-editable_filter"
                                class="dataTables_filter"
                                style="margin-right:45px;"
                            >
                                <label>
                                    搜索:
                                    <input
                                        type="search"
                                        class="form-control input-sm search-input"
                                        placeholder="请输入植物书名"
                                        @input="doSearch($event)"
                                        v-model="doSearchText"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table
                            class="table table-bordered table-striped"
                            style
                            id="datatable-editable"
                        >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>编号</th>
                                    <th>号牌</th>
                                    <th>位置经度</th>
                                    <th>位置纬度</th>
                                    <th>位置高程</th>
                                    <th>lon</th>
                                    <th>lat</th>
                                    <th>名称</th>

                                    <th>科</th>
                                    <th>属</th>
                                    <th>种</th>
                                    <th>分类</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="gradeX" v-for="(item,index) in showItems" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.tid}}</td>
                                    <td>{{item.card}}</td>
                                    <td>{{item.x}}</td>
                                    <td>{{item.y}}</td>
                                    <td>{{item.height}}</td>
                                    <td>{{item.lon}}</td>
                                    <td>{{item.lat}}</td>
                                    <td>{{item.name}}</td>

                                    <td>{{item.plant.family}}</td>
                                    <td>{{item.plant.genera}}</td>
                                    <td>{{item.plant.specie}}</td>
                                    <td>{{item.kind.name}}</td>
                                    
                                    <td class="actions">
                                        <a class="on-default edit-row" @click="editItem(index)">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a class="on-default remove-row" @click="deleteItem(index)">
                                            <i class="fa fa-trash-o"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="row">
                            <div class="col-sm-6">
                                <div
                                    class="dataTables_info"
                                    id="datatable-editable_info"
                                    role="status"
                                    aria-live="polite"
                                >展示 {{PageShowSum}} 总共 {{total}} 项  {{sumPage}} 页</div>
                            </div>
                            <div class="col-sm-6">
                                <div
                                    class="dataTables_paginate paging_simple_numbers"
                                    id="datatable-editable_paginate"
                                >
                                    <ul class="pagination">
                                        <li
                                            class="paginate_button previous"
                                            :class="{ disabled: currentPage === 0 }"
                                        >
                                            <a @click="previousPage()">上一页</a>
                                        </li>
                                        <li class="paginate_button active" >
                                            <a>{{ currentPage+1 }}</a>
                                        </li>
                                        <li
                                            class="paginate_button next"
                                            :class="{ disabled: currentPage === sumPage }"
                                        >
                                            <a @click="nextPage()">下一页</a>
                                        </li>
                                    </ul>
                                </div>
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
const cookie = require("../../utils/cookie");
const s_alert = require("../../utils/alert");
const ses = require("../../utils/ses");
const print = require("../../utils/print");
const apis = require("../../interface/apis");

import { mapMutations } from "vuex";

export default {
    name: "doclist",
    data() {
        return {
            // 分页信息
            off:0,
            currentPage: 0,
            sumPage: 0,

            showItems: [],

            total:0,
            PageShowSum: 10,
            doSearchText: null,
        };
    },
    mounted() {
        this.getPage(this.currentPage);
        this.init();
    },
    methods: {
        getPage(page){
            this.off = page*10;
            console.log(this.off)
        },
        async init(){
            let lists = await apis.list.findAndCountAll(this.off, this.PageShowSum)
            const { count,rows } = lists.data;
            this.total = count;
            this.showItems = rows;
            this.changePageShowSum();
            console.log(lists.data)
        },
        toDocCreate() { this.$router.push("doccreate"); },
        changePageShowSum(){
            this.sumPage = parseInt(this.total / this.PageShowSum);
        },
        previousPage(){
            if(this.currentPage === 0){
                s_alert.basic("不能哟~");
                return ;
            }
            let pre = this.currentPage --;
            console.log('next',pre)
            this.getPage(pre);
            this.init();
        },
        nextPage(){
            if(this.currentPage === this.sumPage){
                s_alert.basic("不能哟~");
                return ;
            }
            let next = this.currentPage ++;
            console.log('next',next)
            this.getPage(next);
            this.init();
        },
        selcetAll() {
            
        },
        deleteItem(index) {
            if (confirm("确认删除吗？")) {
                
            }
        },
    }
};
</script>