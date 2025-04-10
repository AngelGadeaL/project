@echo off
echo Setting up Forge credentials...

set /p FORGE_API_TOKEN=<.env
set /p FORGE_EMAIL=<.env

REM Extract values from the .env file format
for /f "tokens=1,* delims==" %%a in ("%FORGE_API_TOKEN%") do set FORGE_API_TOKEN=%%b
for /f "tokens=1,* delims==" %%a in ("%FORGE_EMAIL%") do set FORGE_EMAIL=%%b

echo Logging into Forge...
echo Email: %FORGE_EMAIL%

rem Manual login process
forge login

echo After login, deploying app...
forge deploy

echo Starting tunnel...
forge tunnel 