@echo off
setlocal EnableDelayedExpansion

set "dir=d:\tech jump\psds"

for /f "delims=" %%f in ('dir /b /a-d /od "%dir%"') do (
    set "lastFile=%%f"
)

cls
start "" "%dir%\%lastFile%"