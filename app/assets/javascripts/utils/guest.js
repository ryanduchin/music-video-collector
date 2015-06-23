window.GuestLogin = {
	initialize: function(){
		$("#guest-login").on( "click", this.guestLogin.bind(this) );
	},

	guestLogin: function(){
		event.preventDefault();
		var that = this;
		$username = $('#form-username');
		$password = $('#form-password');
		$submitButton = $('#session-submit');
		$username.val("");
		$password.val("");


		this.slowtype($username, 'guest', function(){
			that.slowtype($password, 'password', function(){
				$submitButton.click();
			});
		});
	},

	slowtype: function($el, word, callback){

		var typing = setInterval(function(){
			$el.val( $el.val() + word.slice(0,1) );
			word = word.substr(1);

			if (!word){
				clearInterval(typing);
				callback();
			}
		}, 125);
	}

};
