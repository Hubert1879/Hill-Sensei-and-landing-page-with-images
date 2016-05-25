$(document).ready(function(){
	var submitEmail = function(serializedData){
	    try {
	        var dataObject = {};
	        for (var i=0; i < serializedData.length; i++){
	            var obj = serializedData[i];
	            var key, value;
	            for (var param in obj){
	                switch (param){
	                    case 'name':
	                        key = obj[param];
	                        break;
	                    case 'value':
	                        value = obj[param];
	                        break;
	                }
	                dataObject[key] = value;
	            }
	        }
	        console.log(dataObject);
	        $.ajax({
                url: "https://formspree.io/lokyinchan@gmail.com", 
                method: "POST",
                data: dataObject,
                dataType: "json",
                success: function(data){
                	console.log(data);
                	$('#thank-you-message').html('<h1 style="font-size: 3em;">Thank You for Your Interest!</h1><h3>We Will Get Back to You within Next 24 Hours<h3>')
                },
                error: function(err){
                	console.log(err);
                }
            });
	    } catch(err){
	        console.log(err);
	    }
	};
	$('#email-form').submit(function(event){
	    var serializedData = $( this ).serializeArray();
	    console.log( serializedData );
	    submitEmail(serializedData);
        event.preventDefault();
	});
	
});