@echo off
cd %userprofile%\downloads\done
if exist *-%1.7z do (
  echo File found: %cd%\*-%1.7z
) else (
  echo File not found.
)
