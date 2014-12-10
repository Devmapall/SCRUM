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
                
                $(".editScrum").off().on("click",function(e) {
                    console.log($(this).parent());
                })
}