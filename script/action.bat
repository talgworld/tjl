@echo off
cls
setlocal EnableDelayedExpansion
set "psd=%cd%\functions\psdclipboard.js"
set "mirror=actions\mirror.jsx" 
set "smoothmirror=actions\mirrorsmooth.jsx" 
set "mirrorvisible=actions\mirrorvisible.jsx" 
set "showhide=actions\showhideoriginal.jsx"
set "add=actions\add.jsx"
set "remove=%cd%\actions\remove.jsx"
set "save=%cd%\actions\save.jsx"
set "floor=%cd%\actions\floor.jsx"
set "cleanglass=%cd%\actions\cleanglass.jsx" 
set "wiredraw=%cd%\actions\wiredraw.jsx" 
set "wireextract=%cd%\actions\wireextract.jsx" 
set "doublewire=%cd%\actions\doublewire.jsx" 
set "curtain=%cd%\actions\curtain.jsx" 
set "pathtoselection=%cd%\actions\pathtoselection.jsx" 
set "border=%cd%\actions\border.jsx" 
set "assets=%cd%\actions\assets.jsx" 
set "bigger=%cd%\actions\bigger.jsx" 
set "smaller=%cd%\actions\smaller.jsx"
set "shadow=%cd%\actions\shadow.jsx" 
set "shadow0=%cd%\actions\shadow0.jsx" 
set "shadow00=%cd%\actions\shadow00.jsx" 
set "shadow45=%cd%\actions\shadow45.jsx" 
set "shadow90=%cd%\actions\shadow90.jsx" 
set "shadowstyle=%cd%\actions\shadowstyle.jsx" 
set "plate=%cd%\..\files\plate.psd"
::set "scene=%cd%\..\files\scene.psb"
set "scene=%cd%\..\files\scene"
set "logo=%cd%\actions\logo.jsx" 
set "blur1=%cd%\actions\blur1.jsx" 
set "blur2=%cd%\actions\blur2.jsx" 
set "blur3=%cd%\actions\blur3.jsx" 
set "blur4=%cd%\actions\blur4.jsx" 
set "motionblur=%cd%\actions\motionblur.jsx" 
set "layers=%cd%\actions\layers.jsx" 
set "car=%cd%\actions\car.jsx%" 
set "done=%cd%\actions\done.jsx" 
set "flip=%cd%\actions\flip.jsx" 
set "winnew=%cd%\actions\winnew.jsx" 
set "winselect=%cd%\actions\winselect.jsx" 
set "winclean=%cd%\actions\winclean.jsx"
set "removesimilars=%cd%\actions\removesimilars.jsx"
set "exit=%cd%\actions\exit.jsx" 

:: Check and execute actions based on arguments
if %1%==psd goto psd
if %1%==ol ol.bat; cls
if %1%==mirror goto mirror
if %1%==smoothmirror goto mirrorsmooth
if %1%==mirrorvisible goto mirrorvisible
if %1%==showhide goto showhideoriginal
if %1%==add goto add
if %1%==remove goto remove
if %1%==save goto save
if %1%==floor goto floor
if %1%==cleanglass goto cleanglass
if %1%==wiredraw goto wiredraw
if %1%==wireextract goto wireextract
if %1%==curtain goto curtain
if %1%==pathtoselection goto pathtoselection
if %1%==border goto border
if %1%==assets goto assets
if %1%==bigger goto bigger
if %1%==smaller goto smaller
if %1%==shadow goto shadow
if %1%==shadow0 goto shadow0
if %1%==shadow00 goto shadow00
if %1%==shadow45 goto shadow45
if %1%==shadow90 goto shadow90
if %1%==plate goto plate
if %1%==scene goto scene
if %1%==shadowstyle goto shadowstyle
if %1%==logo goto logo
if %1%==blur1 goto blur1
if %1%==blur2 goto blur2
if %1%==blur3 goto blur3
if %1%==blur4 goto blur4
if %1%==motionblur goto motionblur
if %1%==layers goto layers
if %1%==car goto car
if %1%==done goto done
if %1%==flip goto flip
if %1%==winnew goto winnew
if %1%==winselect goto winselect
if %1%==winclean goto winclean
if %1%==removesimilars goto removesimilars
if %1%==exit goto exit

:psd
"node" "%psd%"
exit /b

:mirror
"photoshop" "%cd%\%mirror%"
exit /b

:mirrorsmooth
"photoshop" "%cd%\%smoothmirror%"
exit /b

:mirrorvisible
"photoshop" "%cd%\%mirrorvisible%"
exit /b

:showhideoriginal
"photoshop" "%cd%\%showhide%"
exit /b

:add
"photoshop" "%cd%\%add%"
exit /b

:remove
"photoshop" "%remove%"
exit /b

:save
"photoshop" "%save%"
exit /b

:floor
"photoshop" "%floor%"
exit /b

:cleanglass
"photoshop" "%cleanglass%"
exit /b

:wiredraw
"photoshop" "%wiredraw%"
exit /b

:wireextract
"photoshop" "%wireextract%"
exit /b

:doublewire
"photoshop" "%doublewire%"
exit /b

:curtain
"photoshop" "%curtain%"
exit /b

:pathtoselection
"photoshop" "%pathtoselection%"
exit /b

:border
"photoshop" "%border%"
exit /b

:assets
"photoshop" "%assets%"
exit /b

:bigger
"photoshop" "%bigger%"
exit /b

:smaller
"photoshop" "%smaller%"
exit /b

:shadow
"photoshop" "%shadow%"
exit /b

:shadow0
"photoshop" "%shadow0%"
exit /b

:shadow00
"photoshop" "%shadow00%"
exit /b

:shadow45
"photoshop" "%shadow45%"
exit /b

:shadow90
"photoshop" "%shadow90%"
exit /b

:plate
"photoshop" "%plate%"
exit /b

:scene
start "" "%scene%"
exit /b

:shadowstyle
"photoshop" "%shadowstyle%"
exit /b

:logo
"photoshop" "%logo%"
exit /b

:blur1
"photoshop" "%blur2%"
exit /b

:blur2
"photoshop" "%blur2%"
exit /b

:blur3
"photoshop" "%blur3%"
exit /b

:blur4
"photoshop" "%blur4%"
exit /b

:motionblur
"photoshop" "%motionblur%"
exit /b

:layers
"photoshop" "%layers%"
exit /b

:car
"photoshop" "%car%"
exit /b

:done
"photoshop" "%done%"
exit /b

:flip
"photoshop" "%flip%"
exit /b

:winnew
"photoshop" "%winnew%"
exit /b

:winselect
"photoshop" "%winselect%"
exit /b

:winclean
"photoshop" "%winclean%"
exit /b

:removesimilars
"photoshop" "%removesimilars%"
exit /b

:exit
"photoshop" "%exit%"
exit /b
