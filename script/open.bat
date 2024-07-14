@echo off
set "downloadDir=%USERPROFILE%\Downloads"

timeout /t 0
rem Unzip compressed files then open them
FOR %%A IN ("%downloadDir%\*.7z") DO (
  "C:\Program Files\7-Zip\7z.exe" x "%%A" -o"%%~dpA" -y -mmt
  rem Delete the original .7z file after unzipping
  del "%%A"

  rem Access the unzipped file with its full path
  rem Combine path, name, and .psd extension
  rem  start "" "%%~dpA%%~nA.psd"
  openallpsds.bat
  timeout /t 3
  cleardownpsds.bat
)