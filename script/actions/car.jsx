try {
    var idselectNoLayers = stringIDToTypeID( "selectNoLayers" );
    var desc40 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref20 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref20.putEnumerated( idLyr, idOrdn, idTrgt );
    desc40.putReference( idnull, ref20 );
executeAction( idselectNoLayers, desc40, DialogModes.NO );
} catch(e) {}


try {
    var idslct = charIDToTypeID("slct");
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    // Array of layer names to select
    var layerNames = ["Car", "Car Interior"];
    
    // Loop through each layer name to create a selection
    for (var i = 0; i < layerNames.length; i++) {
        try {
            var ref = new ActionReference();
            var idLyr = charIDToTypeID("Lyr ");
            ref.putName(idLyr, layerNames[i]);
            desc6.putReference(idnull, ref);
            var idselectionModifier = stringIDToTypeID("selectionModifier");
            var idselectionModifierType = stringIDToTypeID("selectionModifierType");
            var idaddToSelection = stringIDToTypeID("addToSelection");
            desc6.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
            var idMkVs = charIDToTypeID("MkVs");
            desc6.putBoolean(idMkVs, false);
            executeAction(idslct, desc6, DialogModes.NO);
        } catch (error) {
            
        }
    }
    
    
} catch(e) {}



// Set up action descriptor
var idPly = charIDToTypeID("Ply ");
var desc56 = new ActionDescriptor();

// Set action reference based on layers
var ref10 = new ActionReference();
ref10.putName(charIDToTypeID("Actn"), "car");
ref10.putName(charIDToTypeID("ASet"), "Code");
desc56.putReference(charIDToTypeID("null"), ref10);

// Play the action
executeAction(idPly, desc56, DialogModes.NO);

