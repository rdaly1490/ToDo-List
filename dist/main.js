$(document).on('ready', start);

function start(eventObj) {

	var $toDoInput = $('#to-do-input');
	var $todoButton = $('#add-to-do');
	var $todoForm = $('#to-do-form');
	var $list = $('#list');
	var strike = true;

	var list = [];

	$todoForm.on('submit', addTodo);
	$list.on("click", strikeThrough);
	
	function addTodo(eventObj) {
		eventObj.preventDefault();
		list.push($toDoInput.val());
		$toDoInput.val('');
		var listHtml = render(list);
		$list.html(listHtml);
	}

	function render(eventObj) {
		$list.innerHTML = '<ol><li>'+list.join('</li><li>')+'</li></ol>';
		return $list.innerHTML;
	}

	function strikeThrough(event) {
		if (strike === true) {
			strike = false;
		}
		else if (strike === false) {
			strike =true;
		}
		if(!strike) {
			event.target.style.textDecoration = "line-through";
		}
		else {
			event.target.style.textDecoration = "none";
		}
	}

	// $todoForm.css("backgroundColor", "green");
	$('body,html').css('backgroundColor','#5480cb');
	$todoButton.css("display", "block");
	$todoButton.css("marginLeft", "auto");
	$todoButton.css("marginRight", "auto");
	$todoButton.css("marginTop", "10px");
	$todoButton.css("height", "50px");
	$todoButton.css("color", "#fff");
	$todoButton.css("backgroundColor", "gray");
	$todoButton.css("borderRadius", "5px");
	$todoButton.css("fontWeight", "bold");
	$toDoInput.css("display", "block");
	$toDoInput.css("marginLeft", "auto");
	$toDoInput.css("marginRight", "auto");
	$toDoInput.css("height", "40px");
	$toDoInput.css("width", "50%");
	$toDoInput.css("fontSize", "16px");
	$toDoInput.css("backgroundColor", "#d9d5d7");
	$list.css("color", "white");
	$list.css("fontSize", "32px");




}