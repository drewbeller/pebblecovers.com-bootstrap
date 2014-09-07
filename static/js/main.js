$('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'top'
});

// https://github.com/Sam152/Javascript-Equal-Height-Responsive-Rows
// http://stackoverflow.com/questions/19695784/how-can-i-make-bootstrap-columns-all-the-same-height
$('.thumbnail').responsiveEqualHeightGrid();

$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).attr("title");
  	$('.modal-title').html(title);
  	$(this.innerHTML).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});