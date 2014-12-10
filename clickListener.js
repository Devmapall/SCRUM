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
                
                $("#FilterReset").button().off().on("click",function(e) {
                    e.preventDefault();
                    $("#tabs > div > div > .group").fadeIn(500);
                });
                
                $(".editScrum").button().off().on("click",function(e) {
                    var ID = $($(this).parent().get(0)).find(".ID").text();
                    console.log($($(this).parent().parent()).find("h3"));
                });
}