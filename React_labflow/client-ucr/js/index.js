$(document).ready(function() {
    getUsuarios();
});

function getUsuarios(){
    $.ajax({
        type: 'GET',
        datatype: 'html',
        url: "http://localhost:3000/api/getUsuarios",
        success: function(data) {
            console.log(data);
            console.log("hola");
        }
    });
}