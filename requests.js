function sendRequest(send) {
    return $.ajax({
        url: "http://scrum.mykey.to:8080/index.hh",
        type: "POST",
        data: send,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    });
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
    
    var user = getUser();
    
    
    $("#addProjectDialog").dialog("open");
}

function getUser() {
    var send = {
        action: "getUser"
    }
    
    sendRequest(send).done(function(r) {
        console.log(r);
    });
}

function addUser() {

}
