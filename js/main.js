$(document).ready(function(){
	//Notifications
	if(!Notification){
		alert('Uh oh, notifications are not available with your browser.');
		return;
	}

	if(Notification.permission !== "granted"){
		Notification.requestPermission();
	}

	function notify(title,message,link,link_flag = 1){
		if (Notification.permission !== "granted")
    		Notification.requestPermission();
  		else {
    		var notification = new Notification(title, {
      			icon: '../img/notification_logo.png',
      			body: message,
    		});

    		notification.onclick = function () {
    			if(link_flag==1)
      				window.open(link);      
    		};
  		}
	}

	//Screen Timer
	var pause = 0;
	var st_seconds = 0;
	var st_minutes = 0;
	var st_hours = 0;

	function displayScreenTimer(){
		var seconds = st_seconds.toString();
		var minutes = st_minutes.toString();
		var hours = st_hours.toString();

		if(st_seconds<10){
			seconds = "0" + seconds;
		}

		if(st_minutes<10){
			minutes = "0" + minutes;
		}

		if(st_hours<10){
			hours = "0" + hours;
		}

		$('.time').html(hours + ":" + minutes + ":" + seconds);
	}

	function checkEvents(){
		if(st_seconds!=0)
			return;
		total_minutes = 60*st_hours + st_minutes;
		for(let i=activity_repeat_time.length - 1;i>=0;i--){
			if(total_minutes%activity_repeat_time[i]==0){
				notify("Workaholic: "+activity_title[i],activity_info[i],"",0);
				return;
			}
		}
	}

	function timer(){
		st_seconds++;
		if(st_seconds==60){
			st_minutes++;
			st_seconds=0;
		}

		if(st_minutes==60){
			st_hours++;
			st_minutes=0;
		}

		if(st_hours==24){
			st_seconds=0;
			st_minutes=0;
			st_hours=0;
		}

		displayScreenTimer();
		checkEvents();
	}

	//START
	$('button.start').click(function(){
		$('.instructions').css('transform','scale(0)');
		$('.black-screen').css('opacity','0');
		setTimeout(function(){
			$('.black-screen').css('display','none');
			$('.instructions').css('display','none');
			notify('Welcome to Workaholic',"Workaholic is running in the background, you can start working and we will notify you when it's time for a break.","");
			screenTimer = setInterval(timer,1000);
		},500);
	});

	//Pause Control
	$('.pause-button').click(function(){
		if(pause==0){
			$('.pause-button span.pause').css('display','none');
			$('.pause-button span.play').css('display','block');
			clearInterval(screenTimer);
			pause = 1;
		}

		else if(pause==1){
			$('.pause-button span.pause').css('display','block');
			$('.pause-button span.play').css('display','none');
			screenTimer = setInterval(timer,1000);
			pause = 0;
		}
	});
});