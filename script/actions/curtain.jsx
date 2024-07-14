// Check if document is open
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    try {
        var carLayer = doc.layers.getByName("Car", LayerKind.NORMAL);
        var carLayer = doc.layers.getByName("Car Interior", LayerKind.NORMAL);
    } catch (error) {
        
    }
    
    // Check if "Car" layer exists
    if (carLayer) {
        doc.activeLayer = carLayer;
    } else {
        var carInteriorLayer = doc.layers.getByName("Car Interior", LayerKind.NORMAL);
        if (carInteriorLayer) {
            doc.activeLayer = carInteriorLayer;
        }
    }
    var idPly = charIDToTypeID( "Ply " ); var desc47 = new ActionDescriptor(); var idnull = charIDToTypeID( "null" ); var ref8 = new ActionReference(); var idActn = charIDToTypeID( "Actn" ); ref8.putName( idActn, "curtain" ); var idASet = charIDToTypeID( "ASet" ); ref8.putName( idASet, "Code" ); desc47.putReference( idnull, ref8 ); executeAction( idPly, desc47, DialogModes.NO ); 
   
}

