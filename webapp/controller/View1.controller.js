sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("northwind.controller.View1", {
        onInit() {
        },
        onRowPress:function(oEvent){
            var oModel=oEvent.getSource();
            var scontext=oModel.getBindingContext();
            var sobject=scontext.getObject();
            sap.ui.core.UIComponent.getRouterFor(this).navTo("view2",{RegionID:sobject.RegionID});
        }


    });
});