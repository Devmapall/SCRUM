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
    $("#addIssueSubmit").button().click(function(event) {
       event.preventDefault();
       var tproject = "NONE";
       var ttitle = $("#issueTitle").val();
       var ttext = $('#issueText').val();
       var send = {
           action: 'addTask',
           project: tproject,
           title: ttitle,
           text: ttext
       }
       var data = sendRequest(send);
       $("#addIssueDialog").dialog("close");
    });
    
    $("#addIssueDialog").dialog("open");
    
    
}

function addTask() {
    $("#addTaskSubmit").button().click(function(event) {
       event.preventDefault();
       var data = sendRequest("{action:'addTask'}");
    });
    
    $("#addTaskDialog").dialog("open");
    
    
}

function addProject() {
    $("#addProjectSubmit").button().click(function(event) {
        event.preventDefault();
        var name = $("#projectName").val();
        var desc = $("#projectDescription").val();
        var send = {
            action: "addProject",
            projectName: name,
            projectDescription: desc
        }
        var response = sendRequest(send);
        $("#addProjectDialog").dialog("close");
    });
    
    $("#addProjectDialog").dialog("open");
}

function showUsers() {

}

function addUser() {

}
