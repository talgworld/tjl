@echo off

set "downloadDir=%USERPROFILE%\Downloads"

for %%A in ("%downloadDir%\temp\*.psd") do (
  "C:\Program Files\7-Zip\7z.exe" a "%downloadDir%\done\%%~nA.7z" "%%A" -mmt
  del "%%A"
)
exit
