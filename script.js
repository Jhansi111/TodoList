$("ul").on("click","li",function(){
    $(this).toggleClass("j1");
    //$("span").toggleClass("j2");
 });

//$("ul").on("mouseover", "span", function(){
    //$("span").slideUp();
//});

//Deleting todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
		});
		event.stopPropagation();
});

// Adding effects to '+' button 
$("button").on("click", function(){
    $("input[type='text']").fadeToggle();
});

//Adding todos
$("input[type='text']").on("keypress", function(event){
	if(event.which===13){
    var newli= $("input").val();
    var newtodo = $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ newli +"</li>");
    //Adding background color to new todo
    //$("li").length %2 === 0 ? $("li:last").addClass("l2"): $("li:last").addClass("l1");
    $(this).val("");   

}
});