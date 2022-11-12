$(document).ready(function() {
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#book tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
});
$(document).ready(function () {   
    $(function () {
        $('#search').datepicker({
            format: 'YYYY-MM-DD',
        });
      });
    $('#search').on('dp.change', function (e) {
     var dd = new RegExp($(this).val(), "i");
    $("#books tr").hide();
    $("#books tr").filter(function () {
        return dd.test($(this).text());
    }).show();
    $(".noResults").hide();
    if ($("#books tr:visible").length == 0) {
        $(".noResults").show();
    }
    });  
});