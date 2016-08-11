/**
 * 删除确认  删除成功
 * Created by jinshiyan on 2016/8/7.
 */
/*$(document).ready(function () {

})*/
function deleteSuccess() {
    $(".table-bordered td a:nth-child(2)").click(function () {
        $(".modal-content-delete").css("display","block");
        $(".delete-success").css("display","none");
    })
    $(".confirm").click(function () {
        $(".modal-content-delete").css("display","none");
        $(".delete-success").css("display","block");
    })
}