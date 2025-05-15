@echo off
cd /d %~dp0

set /p COMMIT_MSG=Commit-Nachricht eingeben: 
git add .
git commit -m "%COMMIT_MSG%"
git push

pause
