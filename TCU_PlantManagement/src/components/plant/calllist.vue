<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h4 class="page-title">用户反馈</h4>
                </div>
            </div>
            <div class="panel">
                <div class="panel-body">
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
                                    <th>反馈学生</th>
                                    <th>内容</th>
                                    <th>创建时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="gradeX" v-for="(item,index) in showItems" :key="index">
                                    <td>{{index}}</td>
                                    <td>{{item.id}}</td>
                                    <td v-if="item.user">{{item.user.stu_id}}</td><td v-else></td>
                                    <td>{{item.callback}}</td>
                                    <td>{{item.created_at}}</td>
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
                                            :class="{ disabled: currentPage === sumPage-1 }"
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
const apis = require("../../interface/apis").default;

import { mapMutations } from "vuex";

export default {
    name: "doclist",
    data() {
        return {
            // 分页信息
            off:0,
            currentPage: 0,
            sumPage: 0,
            PageShowSum: 10,

            showItems: [],
            total:0,

            detail: null,
            item:null,

            // 新建
            kinds:null,
            plants:null,
            createItem:{ condition: 0 }
        };
    },
    mounted() {
        this.getPage();
        this.init();
    },
    updated() {  $(function () { $("[data-toggle='tooltip']").tooltip(); }); },
    methods: {
        // 获取偏移量
        getPage(){ this.off = this.currentPage*this.PageShowSum; },
        // 初始化数据
        async init(){
            let lists = await apis.call.findAndCountAll(this.off, this.PageShowSum)
            const { count,rows } = lists.data;
            this.total = count;
            this.showItems = rows;
            this.sumPage = Math.ceil(this.total / this.PageShowSum);
            console.log(lists.data)
        },
        // 更改页面单元展示数量
        changePageShowSum(){
            this.currentPage = 0;
            this.off = 0;
            this.init();       
        },
        // 上一页
        previousPage(){
            if(this.currentPage === 0){
                s_alert.basic("不能哟~");
                return ;
            }
            this.currentPage --;
            this.getPage();
            this.init();       
        },
        // 下一页
        nextPage(){
            if(this.currentPage === this.sumPage-1){
                s_alert.basic("不能哟~");
                return ;
            }
            this.currentPage ++;
            this.getPage();
            this.init();       
        }
    }
};
</script>