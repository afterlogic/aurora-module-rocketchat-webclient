'use strict';

var
	ko = require('knockout'),
	_ = require('underscore'),
	
	Types = require('%PathToCoreWebclientModule%/js/utils/Types.js')
;

module.exports = {
	ServerModuleName: '%ModuleName%',
	HashModuleName: 'chat',
	
	/**
	 * Setting indicates if module is enabled by user or not.
	 * The Core subscribes to this setting changes and if it is **true** displays module tab in header and its screens.
	 * Otherwise the Core doesn't display module tab in header and its screens.
	 */
	enableModule: ko.observable(false),

	chatUrl: ko.observable(''),
	unreadCounterIntervalInSeconds: ko.observable(15),
	
	/**
	 * Initializes settings from AppData object sections.
	 * 
	 * @param {Object} oAppData Object contained modules settings.
	 */
	init: function (oAppData)
	{
		var oAppDataSection = oAppData['%ModuleName%'];
		
		if (!_.isEmpty(oAppDataSection))
		{
			this.enableModule(Types.pBool(oAppDataSection.EnableModule, this.enableModule()));
			this.chatUrl(oAppDataSection.ChatUrl, this.chatUrl());
			this.unreadCounterIntervalInSeconds(Types.pInt(oAppDataSection.UnreadCounterIntervalInSeconds), this.unreadCounterIntervalInSeconds());
		}
	},
	
	/**
	 * Updates settings of chat module after editing.
	 * 
	 * @param {boolean} bEnableModule New value of setting 'EnableModule'
	 */
	update: function (bEnableModule)
	{
		this.enableModule(bEnableModule);
	}
};
