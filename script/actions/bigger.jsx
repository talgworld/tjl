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
    var layerNames = ["Car", "Car Interior", "Shadow", "Mirrors", "Original", "Windows", "Reflection"];
    
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

try {
    var idPly = charIDToTypeID( "Ply " ); var desc47 = new ActionDescriptor(); var idnull = charIDToTypeID( "null" ); var ref8 = new ActionReference(); var idActn = charIDToTypeID( "Actn" ); ref8.putName( idActn, "bigger" ); var idASet = charIDToTypeID( "ASet" ); ref8.putName( idASet, "Code" ); desc47.putReference( idnull, ref8 ); executeAction( idPly, desc47, DialogModes.NO ); 
} catch (error) {
    
}
