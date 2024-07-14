@echo off
setlocal EnableDelayedExpansion
call :PSD
call :Tracker
call :chrome
::call :crop
::call :testSpeed
call :startWork
::call :counter
call :wheelmenu
exit /b

:Tracker
echo starting webwork tracker
start /b "WebWork Tracker" "C:\Program Files\WebWork\WebWork Tracker\WebWorkTracker.exe"
exit /b

:PSD
cls && echo starting photoshop
start /b "Photoshop" "photoshop"
exit /b

:chrome
cls && echo starting chrome
start /b "microsoft edge" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
exit /b

:crop
cls && echo starting crop
start /b "Crop" "node D:\tech jump\script\functions\cropWebWorkImage.js"
exit /b

:testSpeed
cls && echo starting testSpeed
start /b "Test Speed" "node D:\tech jump\script\functions\netSpeedTest.js"
exit /b

:startWork
cls && echo start work
start /b "StartWork" "d:\tech jump\script\startwork.bat"
exit /b

:wheelmenu
echo starting wheel menu
start /b "Wheel Menu" cmd /c cd "d:\tech jump" && npm start
exit /b

:counter
echo starting counter
start /b python "D:\tech jump\script\counter.py"
exit /b
