set "downloadDir=%USERPROFILE%\Downloads"
FOR %%A IN ("%downloadDir%\*.7z") DO "C:\Program Files\7-Zip\7z.exe" x "%%A" -o"%%~dpA" -y
del "%downloadDir%\*.7z"
node "openpsds.js"

