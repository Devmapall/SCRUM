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
       
       var tproject = $("#issueSelectProject option:selected").text();
       var tseverity = $("#issueSelectSeverity option:selected").text();
       var tpriority = $("#issueSelectPriority option:selected").text();
       var ttitle = $("#issueTitle").val();
       var ttext = $('#issueText').val();
       var send = {
           action: 'addIssue',
           project: tproject,
           severity: tseverity,
           priority: tpriority,
           title: ttitle,
           text: ttext
       }
       var data = sendRequest(send);
       $("#addIssueDialog").dialog("close");
    });
    
    $("#addIssueDialog").dialog("open");
    
    var send = {
        action: "getProjects"
    }
    
    sendRequest(send).done(function(r) {
        console.log(r);
        $.each(r.projects, function(i, item) {
            console.log(item);
            $("#issueSelectProject").append("<option>"+item+"</option>");
        });
    });
    
    var send = {
        action: "getSeverities"
    }
    
    sendRequest(send).done(function(r) {
        $.each(r.severities, function(i, item) {
            $("#issueSelectSeverity").append("<option>"+item+"</option>");
        });
    });
    
    var send = {
        action: "getPriorities"
    }
    
    sendRequest(send).done(function(r) {
        $.each(r.priorities, function(i, item) {
            $("#issueSelectPriority").append("<option>"+item+"</option>");
        });
    });
    
}

function addTask() {
        $("#addTaskSubmit").button().click(function(event) {
       event.preventDefault();
       
       var tproject = $("#taskSelectProject option:selected").text();
       var tseverity = $("#taskSelectSeverity option:selected").text();
       var tpriority = $("#taskSelectPriority option:selected").text();
       var ttitle = $("#taskTitle").val();
       var ttext = $('#taskText').val();
       var send = {
           action: 'addTask',
           project: tproject,
           severity: tseverity,
           priority: tpriority,
           title: ttitle,
           text: ttext
       }
       var data = sendRequest(send);
       $("#addTaskDialog").dialog("close");
    });
    
    $("#addTaskDialog").dialog("open");
    
    var send = {
        action: "getProjects"
    }
    
    sendRequest(send).done(function(r) {
        console.log(r);
        $.each(r.projects, function(i, item) {
            console.log(item);
            $("#taskSelectProject").append("<option>"+item+"</option>");
        });
    });
    
    var send = {
        action: "getSeverities"
    }
    
    sendRequest(send).done(function(r) {
        $.each(r.severities, function(i, item) {
            $("#taskSelectSeverity").append("<option>"+item+"</option>");
        });
    });
    
    var send = {
        action: "getPriorities"
    }
    
    sendRequest(send).done(function(r) {
        $.each(r.priorities, function(i, item) {
            $("#taskSelectPriority").append("<option>"+item+"</option>");
        });
    });
}

function addProject() {
    $("#addProjectSubmit").button().click(function(event) {
        event.preventDefault();
        var name = $("#projectName").val();
        var desc = $("#projectDescription").val();
        var participants = [];
        $("#projectParticipantList").find(".participantName").each(function(i,item) {
            participants.push($(item).text());
        });
        console.log(participants);
        var send = {
            action: "addProject",
            projectName: name,
            projectDescription: desc,
            projectParticipants: participants
        }
        var response = sendRequest(send);
        
        $("#addProjectDialog").dialog("close");
    });
    
    $("#projectAddParticipant").button().click(function(event) {
        var user = $("#projectParticipantSelect option:selected").text();
        if($("#projectParticipant"+user).length === 0) {
            console.log("adding "+user);
            var button = $("<button class='projectRemoveParticipant' participant='"+user+"'>Remove</button>").button().on("click",function() {
                var user = $(this).attr("participant");
                $("#projectParticipant"+user).remove();
                $(this).remove();
            });
            $("#projectParticipantList").append("<tr id='projectParticipant"+user+"'><td class='participantName'>"+user+"</td><td id='participantRemove"+user+"'></td></tr>");
            $("#participantRemove"+user).append(button);
        } else {
            console.log("User already participating?");
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
