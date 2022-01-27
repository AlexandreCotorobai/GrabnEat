$().ready(function() {
    $("#uso").change(function() {
        var retVal = $("#uso option:selected").val() + "-" + $("#uso option:selected").text();
        alert(retVal)
    });
});