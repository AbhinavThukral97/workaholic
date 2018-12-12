$('document').ready(function(){
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var date = new Date();
	var date_in_word = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
	$('section.todo h2').html(date_in_word);

	var todo_DOM1 = '<div class="todo-item"><div class="checkbox"><i class="fas fa-check"></i></div><span>'
	var todo_DOM2 = '</span><div class="remove-todo"><i class="fas fa-minus"></i></div></div>'

	function todoAdd(){
		item = $('.add-todo input').val();
		if(item!=""){
			$('.add-todo input').val("");
			$('.todo-wrapper').append(todo_DOM1 + item + todo_DOM2);
		}
	}

	var todos = 0;

	//Adding To-Dos
	$('.add-todo button').click(function(){
		todoAdd();
		todos++;
		$('.todo-wrapper p.empty-message').css('display','none');
	});

	$('.add-todo input').keyup(function(e){
		if(e.keyCode==13){
			todoAdd();
			todos++;
			$('.todo-wrapper p.empty-message').css('display','none');
		}
	});

	$('body').on('click','.todo-item', function(){
		$(this).toggleClass('checked');
	});

	$('body').on('click','.todo-item .remove-todo', function(){
		$(this).parent().remove();
		todos--;
		if(todos==0)
			$('.todo-wrapper p.empty-message').css('display','block');
	});
});