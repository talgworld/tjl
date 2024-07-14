// Define the keywords for similar name layers to merge before save
var keywords = ["Mirrors", "Shadow"]; // Add all the keywords you want to use

// Get a reference to the active document
var doc = app.activeDocument;

// Create an object to store layers with keywords as keys
var layersByKeyword = {};

// Iterate through all layers in the document
for (var i = 0; i < doc.layers.length; i++) {
    var currentLayer = doc.layers[i];
    
    // Check if the layer name contains any of the specified keywords
    for (var k = 0; k < keywords.length; k++) {
        var keyword = keywords[k];
        
        if (currentLayer.name.indexOf(keyword) !== -1) {
            if (!layersByKeyword[keyword]) {
                layersByKeyword[keyword] = [];
            }
            layersByKeyword[keyword].push(currentLayer);
        }
    }
}

// Merge layers with the same keyword
for (var keyword in layersByKeyword) {
    var layersToMerge = layersByKeyword[keyword];
    
    if (layersToMerge.length > 1) {
        doc.activeLayer = layersToMerge[0];
        
        for (var j = 1; j < layersToMerge.length; j++) {
            layersToMerge[j].merge();
        }
    }
}

//save process
var idsave = charIDToTypeID( "save" );
    var desc45 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc46 = new ActionDescriptor();
    var idPhtthree = charIDToTypeID( "Pht3" );
    desc45.putObject( idAs, idPhtthree, desc46 );
    var idIn = charIDToTypeID( "In  " );
    var currentScriptFile = new File($.fileName);
    var parentFolder = currentScriptFile.parent.parent.parent;
    desc45.putPath( idIn, new File( parentFolder + "/psds/" + doc.name ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc45.putInteger( idDocI, 208 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc45.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
executeAction( idsave, desc45, DialogModes.NO );

var idIn = charIDToTypeID("In  "); // Define idIn as a Photoshop type ID
var tempFolderPath = "C:\\Users\\talgw\\Downloads\\temp"; // Define the path to the "temp" folder

var tempSavePath = new Folder(tempFolderPath); // Create a Folder object for the "temp" folder

// Check if the "temp" folder exists, if not, create it
if (!tempSavePath.exists) {
    tempSavePath.create();
}

// Check if the "temp" folder is valid
if (tempSavePath.exists && tempSavePath instanceof Folder) {
    desc45.putPath(idIn, tempSavePath); // Set the path in the ActionDescriptor
    executeAction(idsave, desc45, DialogModes.NO);
} else {
    alert("The specified save path is not valid.");
}

var doneFolderPath = "C:\\Users\\user\\Downloads\\done"; // Define the path to the "done" folder
var doneSavePath = new Folder(doneFolderPath); // Create a Folder object for the "done" folder

// Check if the "done" folder exists, if not, create it
if (!doneSavePath.exists) {
    doneSavePath.create();
}

// Close the active document
doc.close(SaveOptions.DONOTSAVECHANGES);