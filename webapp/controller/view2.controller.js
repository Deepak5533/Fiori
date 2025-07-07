sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("northwind.controller.view2", {
        onInit() {
            var Router=sap.ui.core.UIComponent.getRouterFor(this);
            Router.getRoute("view2").attachPatternMatched(this.objectMatch,this)
        },
        objectMatch:function(oEvent){
            var regionid=oEvent.getParameter("arguments").RegionID;
            var path="/Regions("+regionid+")";
            this.getView().bindElement({path:path});
        }
        
    });
});