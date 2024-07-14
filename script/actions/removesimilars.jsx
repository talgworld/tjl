// Define the keywords for similar name layers
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
