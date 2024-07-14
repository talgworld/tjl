@echo off
taskkill /f /im PenTablet.exe
timeout /t 1 /nobreak >nul
start "" "C:\Program Files\Pentablet\PenTablet.exe"
