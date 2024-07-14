@echo off
setlocal enabledelayedexpansion

:crop
set "inputDir=C:\Users\talgw.DESKTOP-MA91S0C\AppData\Local\Temp\WebWorkTracker\screenshots\186640"
set "outputDir=C:\Users\talgw.DESKTOP-MA91S0C\AppData\Local\Temp\WebWorkTracker\screenshots\186640"
set "croppedFilesList=%outputDir%\cropped_files.txt"

if not exist "%croppedFilesList%" echo.>"%croppedFilesList%"

for %%F in ("%inputDir%\*.*") do (
    set "alreadyCropped=false"  REM Reset for each file
    for /F "usebackq delims=" %%L in ("%croppedFilesList%") do (
        if /I "%%~nxF"=="%%~L" set "alreadyCropped=true"
    )

    if not "!alreadyCropped!"=="true" (
        magick "%%F" -format "%%m" info: | findstr /I "JPEG PNG GIF BMP" >nul && (
            magick "%%F" -crop 67x100%%+0+0 "%%~dpnF%%~xF"
            set "filename=%%~dpnF%%~xF"
            echo !filename!>> "%croppedFilesList%"
        )
    )
)

timeout /t 10 /nobreak > nul
goto crop
