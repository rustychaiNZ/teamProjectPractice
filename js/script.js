$(document).ready(function(){
	console.log('Jquery is linked and working');

	var i;
	for(i = 0; i < 12; i++){
		document.getElementById('cards').innerHTML += 
			'<div class="col-4 py-3">' +
				'<div class="card mx-auto" style="width: 18rem;">' +
					'<img src="..." class="card-img-top" alt="...">' +
					'<div class="card-body">' +
						'<h5 class="card-title">Card title</h5>' +
						'<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>' +
						'<a href="#" class="btn btn-primary">Go somewhere</a>' +
					'</div>' +
				'</div>' +
			'</div>';
		}
});