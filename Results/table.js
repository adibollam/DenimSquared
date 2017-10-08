$(function() {
    $('#resizeChart').click(function() {     
        var $oldTable = $('#table');   
        var $table = $('<table>').attr('id', 'table');        
        var width = $('#inputWidth').val();
        var height = $('#inputHeight').val();
        
        for (var row = 0; row < height; row++) {
            var $tr = $('<tr>');            
            for (var column=0; column < width; column++) {
                var $td = $('<td>');
                $td.html(getCellValue($oldTable, row, column));
                $tr.append($td);
            }            
            $table.append($tr);               
        }
        $oldTable.remove();
        $('#grid-source').append($table);
    });
})();



