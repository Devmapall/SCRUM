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
    
    $("#projectAddParticipant").button().click(function(event) {
        var user = $( "#projectParticipantSelect option:selected" ).text();
        console.log($("#projectParticipantList").find(".projectParticipant"+user));
        if($(".projectParticipant"+user) == "undefined") {
            $("#projectParticipantList").append("<li class='projectParticipant"+user+"'>"+user+"</li>");
        }
    });
    
    var send = {
        action: "getUser"
    }
    
    sendRequest(send).done(function(r) {
        console.log(r);
        $.each(r.user, function(i, item) {
            console.log(item);
            $("#projectParticipantSelect").append("<option>"+item+"</option>");
        });
    });

    $("#addProjectDialog").dialog("open");
}

function addUser() {

}
