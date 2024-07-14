@echo off
setlocal EnableDelayedExpansion

set "code=var idPly = charIDToTypeID( ^"Ply ^" ); ^
var desc47 = new ActionDescriptor(); ^
var idnull = charIDToTypeID( ^"null^" ); ^
var ref8 = new ActionReference(); ^
var idActn = charIDToTypeID( ^"Actn^" ); ^
ref8.putName( idActn, ^"FILENAME^" ); ^
var idASet = charIDToTypeID( ^"ASet^" ); ^
ref8.putName( idASet, ^"Code^" ); ^
desc47.putReference( idnull, ref8 ); ^
executeAction( idPly, desc47, DialogModes.NO );"

set "files=mirror mirrorsmooth mirrorvisible cleanglass wiredraw wireextract doublewire curtain pathtoselection bordernoglass borderglass assets bigger smaller shadow0 shadow00 shadow45 shadow90 shadowstyle logo blur1 blur2 blur3 blur4 motionblur layers car done flip exit"

for %%f in (%files%) do (
    set "file=%cd%\actions\%%f.jsx"
    set "code=!code:FILENAME=%%f!"
    echo !code! > "!file!"
)

echo All .jsx files have been filled with the specified code.
