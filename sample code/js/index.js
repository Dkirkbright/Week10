var notification_count=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

		//screen.lockOrientation('landscape-primary');
		screen.orientation.lock('landscape');
		
}

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		//screen.lockOrientation('portrait');
		screen.orientation.lock('portrait');
	});
	
	$('#dialogButton').on('click', function() {
		//screen.lockOrientation('landscape-primary');
		screen.orientation.lock('landscape-primary');
	});

	$('#notificationButton').on('click', function() {
		//screen.lockOrientation('landscape-secondary');
		screen.orientation.lock('landscape-secondary');
	});

	$('#2notificationButton').on('click', function() {
		//screen.lockOrientation('portrait-secondary');
		screen.orientation.lock('portrait-secondary');
	});

});

/*

function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Ellloooooo Dan', duration: 10000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Is Dan Amazing?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Obviously.', 'No...']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Yeah that's right", duration: 3000});
   	else if(buttonIndex==2) createDialog();

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}
*/