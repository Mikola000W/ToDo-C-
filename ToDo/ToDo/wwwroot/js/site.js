function deleteTodo(i) {
    $.ajax({
        url: 'Home/Delete',
        type: 'POST',
        data: {
            id: i
        },
        success: function () {
            window.Location.reload();
        }
    });
}
function populateForm(i) {
    $.ajax({
        url: 'Home/PopulateForm',
        type: 'GET',
        data: {
            id: i
        },
        dataTypeL ,'json',
        success: function (response) {
            $("#Todo_Name").val(response.name);
            $("#Todo_Id").val(response.id);
            $("#Todo-button").val("Update Todo");
            $("#form-action").attr("action", "Home/Update");
        }

    })
}