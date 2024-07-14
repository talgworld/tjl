@echo off

setlocal EnableDelayedExpansion

set "downloadDir=%USERPROFILE%\Downloads"
rem start "" "d:\tech jump\script\ahk\left click.exe"
rem start "" "d:\tech jump\script\ahk\loop.exe"


:loop
color 06
set "found7z=false"
set "foundPSDInTemp=false"
set "foundPSDInDown=false"
::if .7z file in download unzip

for %%f in ("%downloadDir%\*.7z") do (
    set "found7z=true"
    color 70
)
if !found7z! == true (
    timeout /t 0
    start /wait /b /min cmd /c "d:\tech jump\script\open.bat"
)

::if .PSD file in temp compress
for %%f in ("%downloadDir%\temp\*.psd") do (
    set "foundPSDInTemp=true"
    color 70
)
if !foundPSDInTemp! == true (
    start /wait /b /min cmd /c "d:\tech jump\script\compressTemp.bat"

    rem start /B vlc "d:\tech jump\sounds\car horn.mp3" vlc://quit --run-time=3
 
    ::if .PSD file in download del
    for %%f in ("%downloadDir%\*.psd") do (
        set "foundPSDInDown=true"
)
)

if !foundPSDInDown! == true (
    start /b /min cmd /c "d:\tech jump\script\clearDownPSDs.bat"
   
)


timeout /t 3 /nobreak > nul
cls
goto loop
