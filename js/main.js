require.config({
	baseUrl: 'js'
});

require(['zepto', 'progressBar'], function($, progress) {
	new progress({
		container: '#basicStyle',
		anchors: [0, 3600],
		current: 3000,
		isRoundAnchor: false
	});
	new progress({
		container: '#roundStyle',
		anchors: [0, 3600, 5000],
		current: 4000,
		isRoundAnchor: true
	});
});