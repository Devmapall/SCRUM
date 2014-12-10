function accordionTemplate(data) {
    
    return $('<div class="group"><h3>Task #5324 - Schlag ihn!</h3>'+
	'<div>'+
            '<table border="0" style="width:100%;font-size:0.8em;">'+
		'<tr>'+
                    '<td>Severity: </td>'+
                    '<td>'+data.severity+'</td>'+
                    '<td>Priority: </td>'+
                    '<td>'+data.priority+'</td>'+
                    '<td>Created: </td>'+
                    '<td>'+data.createDate+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Assigned: </td>'+
                    '<td>'+data.assigned+'</td>'+
                    '<td>Assignee: </td>'+
                    '<td>'+data.assignee+'</td>'+
                    '<td>Assign date: </td>'+
                    '<td>'+data.assignDate+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Status: </td>'+
                    '<td>'+data.status+'</td>'+
                    '<td>Creator: </td>'+
                    '<td>'+data.creator+'</td>'+
                '</tr>'+
            '</table>'+
            '<p>Der kollege Michel muss dringendst mit einem h&ouml;lzernen, ziemlich geraden, langen'+
'Naturprodukt aus dem Wald im Gesicht bearbeitet werden, um seine Produktivit&auml;t, seine Motivation zu steigern und zur allgemeinen Belustigung'+
'meinerseits beizutragen.</p>'+
            '<button class="editTask">Edit</button>'+
            '<script>'+
                '$(function() {'+
                    '$(".editTask").button();'+
                '});'+
            '</script>'+
        '</div>'+
    '</div>');
}