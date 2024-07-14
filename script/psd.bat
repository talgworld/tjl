rem open psd in psds folder
@echo off
if "%~1"=="" (
    echo Usage: open [file ID1] [file ID2] ...
    exit /b 1
)

:process_ids
if "%~1" neq "" (
    set "id=%1"
    for /R "d:\tech jump\psds" %%F in (*-%id%.psd) do (
        set "filename=%%F"
        echo opening %filename%
        call :open
    )
    shift
    goto :process_ids
)

exit /b 0

:open
start "" "%filename%"
timeout /t 1
cls
exit /b
 