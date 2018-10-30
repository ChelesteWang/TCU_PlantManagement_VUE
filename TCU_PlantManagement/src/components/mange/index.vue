<template>
    <div class="wrapper">
        <div class="container">

            <!-- Page-Title -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"> 设置 <span class="m-l-5"><i class="fa fa-cog"></i></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <h4 class="page-title">欢迎 !</h4>
                </div>
            </div>


            <!-- Start Widget -->
            <div class="row">
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bx-shadow bg-info">
                        <span class="mini-stat-icon"><i class="ion-ios7-location"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">521</span>
                            总共植物数量
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0"> 上周新增植株 <span class="pull-right">23</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-purple bx-shadow">
                        <span class="mini-stat-icon"><i class="ion-ios7-cart"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">956</span>
                            New Orders
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">Last week's Orders <span class="pull-right">59</span></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-primary bx-shadow">
                        <span class="mini-stat-icon"><i class="ion-android-contacts"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">5210</span>
                            New Users
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">Last month's Users <span class="pull-right">136</span></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-success bx-shadow">
                        <span class="mini-stat-icon"><i class="ion-eye"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">20544</span>
                            Unique Visitors
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0"> 最近访问量 <span class="pull-right">1026</span></h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- End row-->


            <div class="row">
                <div class="col-lg-8">
                    <div class="portlet"><!-- /portlet heading -->
                        <div class="portlet-heading">
                            <h3 class="portlet-title text-dark text-uppercase">
                                Website Stats
                            </h3>
                            <div class="portlet-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                <span class="divider"></span>
                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet1"><i class="ion-minus-round"></i></a>
                                <span class="divider"></span>
                                <a href="#" data-toggle="remove"><i class="ion-close-round"></i></a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div id="portlet1" class="panel-collapse collapse in">
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="website-stats" style="position: relative;height: 320px"></div>
                                        <div class="row text-center m-t-30">
                                            <div class="col-sm-4">
                                                <h4 class="counter">86,956</h4>
                                                <small class="text-muted"> Weekly Report</small>
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
                    </div> <!-- /Portlet -->
                </div> <!-- end col -->

                <div class="col-lg-4">
                    <div class="portlet"><!-- /portlet heading -->
                        <div class="portlet-heading">
                            <h3 class="portlet-title text-dark text-uppercase">
                                Selling Stats
                            </h3>
                            <div class="portlet-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                <span class="divider"></span>
                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i class="ion-minus-round"></i></a>
                                <span class="divider"></span>
                                <a href="#" data-toggle="remove"><i class="ion-close-round"></i></a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div id="portlet2" class="panel-collapse collapse in">
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="pie-chart">
                                            <div id="pie-chart-container" class="flot-chart" style="height: 320px">
                                            </div>
                                        </div>

                                        <div class="row text-center m-t-30">
                                            <div class="col-sm-6">
                                                <h4 class="counter">86,956</h4>
                                                <small class="text-muted"> Weekly Report</small>
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
                    </div> <!-- /Portlet -->
                </div> <!-- end col -->
            </div> <!-- End row -->

        </div>
      </div>   
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
