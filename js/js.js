var cloneForm = $("#friendInfo .clone_form").clone();
var targetCount = $("#friendCount").value;
var counter = 1;

$("#friendCount").change(function (e) {
    event.preventDefault();
    counter++;
    var newClone = cloneForm.clone().find(
    ':input').each(function(){
        var newId = this.id + counter;
        this.id = newId;
    }).end()
    .appendTo('#friendInfo');
    return false;
});
