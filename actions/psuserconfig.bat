@echo off
set "userdir=%userprofile%\AppData\Roaming\Adobe\Adobe Photoshop CC 2019\Adobe Photoshop CC 2019 Settings"
cd /d "%userdir%"
echo WarnRunningScripts 0 > PSUserConfig.txt
