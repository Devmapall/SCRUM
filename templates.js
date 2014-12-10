function accordionTemplate(data) {
    return $('<div class="group" sev="'+data.severity+'" prio='+data.priority+'>'+
        '<h3>'+data.Type+' #'+data.ID+' - '+data.title+'</h3>'+
	'<div>'+
            '<table border="0" style="width:100%;font-size:0.8em;">'+
		'<tr>'+
                    '<td>ID: </td>'+
                    '<td>'+data.ID+'</td>'+
                    '<td>Severity: </td>'+
                    '<td>'+data.severity+'</td>'+
                    '<td>Priority: </td>'+
                    '<td>'+data.priority+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Created: </td>'+
                    '<td>'+data.createDate+'</td>'+
                    '<td>Assigned: </td>'+
                    '<td>'+data.assigned+'</td>'+
                    '<td>Assignee: </td>'+
                    '<td>'+data.assignee+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Assign date: </td>'+
                    '<td>'+data.assignDate+'</td>'+
                    '<td>Status: </td>'+
                    '<td>'+data.status+'</td>'+
                    '<td>Creator: </td>'+
                    '<td>'+data.creator+'</td>'+
                '</tr>'+
            '</table>'+
            '<p>'+data.text+'</p>'+
            '<button class="editScrum">Edit</button>'+
        '</div>'+
    '</div>');
}