var idPly = charIDToTypeID( "Ply " ); var desc47 = new ActionDescriptor(); var idnull = charIDToTypeID( "null" ); var ref8 = new ActionReference(); var idActn = charIDToTypeID( "Actn" ); ref8.putName( idActn, "mirrorvisible" ); var idASet = charIDToTypeID( "ASet" ); ref8.putName( idASet, "Code" ); desc47.putReference( idnull, ref8 ); executeAction( idPly, desc47, DialogModes.NO ); 
