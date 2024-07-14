@echo off
set "downloadDir=%USERPROFILE%\Downloads"


for %%f in (%downloadDir%\*.psd) do (
    start "" "%%~ff"
)
