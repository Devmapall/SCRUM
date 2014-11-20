function sendRequest(send) {
    var response;
    $.ajax({
        url: "http://scrum.mykey.to:8080/auth/index.php",
        type: "POST",
        data: send,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            response = data;
        }
    });
    return response;
}

function loadProjects() {

}

function loadOverview() {

}

function loadOpenTasks() {

}

function loadOpenIssues() {

}

function loadMyTasks() {

}

function loadMyIssues() {

}

function loadClosedTasks() {

}

function closedIssues() {

}

function addIssue() {
    $("#issueSubmit").button().click(function(event) {
       event.preventDefault();
       var tproject = "";
       var ttitle = $("#issueTitle").val();
       var ttext = $('#issueText').val();
       var send = {
           action: 'addTask',
           project: tproject,
           title: ttitle,
           text: ttext
       }
       var data = sendRequest(send);
    });
    
    $("#addIssueDialog").dialog("open");
    
    
}

function addTask() {
    $("#taskSubmit").button().click(function(event) {
       event.preventDefault();
    });
    
    $("#addTaskDialog").dialog("open");
    
    var data = sendRequest("{action:'addTask'}");
}

function addProject() {

}

function showUsers() {

}

function addUser() {

}
