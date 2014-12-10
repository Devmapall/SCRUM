function applyListener() {

    $("#addTask").click(function(e) {
        e.preventDefault();
        addTask();
    });

    $("#addIssue").click(function(e) {
        e.preventDefault();
        addIssue();
    });

    $("#addProject").click(function(e) {
        e.preventDefault();
        addProject();
    });

    $("#FilterReset").button().off().on("click", function(e) {
        e.preventDefault();
        $("#tabs > div > div > .group").fadeIn(500);
    });

    $(".editScrum").button().off().on("click", function(e) {
        var ID = $($(this).parent().get(0)).find(".ID").text();
        var type = $($(this).parent().parent().get(0)).find("h3").text().split(" ")[0];
        $("#edit" + type + "Dialog").dialog("open");

        if (type === "Issue") {
            loadIssue(ID).done(function(data) {
                var issue = data.issue;
                
                $("#editIssueID").attr("value",issue.ID);
                $("#editIssueTitle").val(issue.title);
                $("#editIssueText").val(issue.text);
                
                var send = {
                    action: "getProjects"
                }

                sendRequest(send).done(function(r) {
                    console.log(r);
                    $.each(r.projects, function(i, item) {
                        console.log(item);
                        $("#editIssueSelectProject").append("<option>" + item + "</option>");
                    });
                });

                var send = {
                    action: "getSeverities"
                }

                sendRequest(send).done(function(r) {
                    $.each(r.severities, function(i, item) {
                        if(item == issue.severity) {
                            $("#editIssueSelectSeverity").append("<option selected>" + item + "</option>");
                        } else {
                            $("#editIssueSelectSeverity").append("<option>" + item + "</option>");
                        }
                    });
                });

                var send = {
                    action: "getPriorities"
                }

                sendRequest(send).done(function(r) {
                    $.each(r.priorities, function(i, item) {
                        if(item == issue.priority) {
                            $("#editIssueSelectPriority").append("<option selected>" + item + "</option>");
                        } else {
                            $("#editIssueSelectPriority").append("<option>" + item + "</option>");
                        }
                    });
                });
            });
        }
    });
    
    $("#editIssueSubmit").button().off().on("click", function(e) {
        updateIssue();
    });
}