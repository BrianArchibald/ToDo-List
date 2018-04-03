// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on x to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {  // this here is the span
		$(this).remove(); // this here is the li due to the .parent
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// get new todo text from input
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});