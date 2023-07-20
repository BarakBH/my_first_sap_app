sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("myfirstsapapp.controller.MyFirstSapView", {
            onInit: function () {

            },

            onClick: function () {
                MessageToast.show("Button is clicked");
            }

        });
    });
