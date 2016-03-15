Router.configure({
	// layoutTemplate: 'appBody',
});

Router.map(function() {
	this.route('default', {
		path: '/'
	});
	this.route('news');
	this.route('presenters');
	this.route('committee');
	this.route('contact');
	this.route('about');

	// Events
	this.route('beyondStatusQuo', {
		path: 'beyond-status-quo'
	});
});