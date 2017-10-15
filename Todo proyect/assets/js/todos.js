
//check off speficif ToDos by clicking

$("li").click(function(){
    $(this).toggleClass("completed");
});

//Click on X to delete ToDo

$("span").click(function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});