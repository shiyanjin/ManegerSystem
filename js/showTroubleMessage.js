/**
 * 显示故障信息
 * Created by jinshiyan on 2016/8/11.
 */
$(document).ready(function () {
    changTopClass();//改变top导航栏激活项样式
    //changePage();//改变页码显示样式
    var currentPage = 1;
    var maxPage = 1;
    //alert(currentPage+" "+maxPage)
    page(currentPage,maxPage);
})