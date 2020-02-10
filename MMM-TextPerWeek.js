/* Magic Mirror
 * Module: MMM-TextPerWeek
 *
 * By Johan Persson, https://github.com/retroflex
 * MIT Licensed.
 */

Module.register('MMM-TextPerWeek', {
	// Default configuration.
	defaults: {
		texts: {
			"default": "",
			// 1: "Text for first week",
			// 2: "Text for second week"
    },
	},

	getStyles: function() {
		return [ 'modules/MMM-TextPerWeek/css/MMM-TextPerWeek.css' ];
	},

	getScripts: function() {
		return ["moment.js"]
	},

	// Override dom generator.
	getDom: function () {
		var getLetter = () => {
			var thisWeek = moment().week();
			var letter = (this.config.texts.hasOwnProperty(thisWeek))
				? this.config.texts[thisWeek]
				: this.config.texts["default"];
			return letter;
		};
		var dom = document.createElement("div");
		dom.innerHTML = getLetter();
		//dom.classList.add("letterOfWeek")
		return dom;
	},

	notificationReceived: function(noti, payload) {
		if (noti == "DOM_OBJECTS_CREATED") {
			this.refresh();
		}
	},

	refresh: function() {
		this.updateDom();
		setTimeout( () => {
			this.refresh();
		}, 1000*60*60*3);  // In millisecs, refresh every 3 hours.
  }
});
