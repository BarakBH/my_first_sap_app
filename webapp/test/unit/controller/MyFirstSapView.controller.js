/*global QUnit*/

sap.ui.define([
	"my_first_sap_app/controller/MyFirstSapView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyFirstSapView Controller");

	QUnit.test("I should test the MyFirstSapView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
