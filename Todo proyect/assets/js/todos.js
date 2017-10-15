
//check off speficif ToDos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete ToDo

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function (event) {
    if(event.which === 13){
        //Store the text in a new variable
        var TodoText =  $(this).val();
        //Clear the input
        $(this).val("");
        //create a new li and add it to the ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + TodoText +"</li>");
    }
})
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});