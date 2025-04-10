@echo off
echo Setting up Forge credentials...

set FORGE_EMAIL=angel.gadea@gmail.com
set FORGE_API_TOKEN=ATATT3xFfGF0loiWs2FQjf9eWMXd5Bphn7txulzzZsWQVhPEkyrXgJksBLi192BL18zaXeO_XkZmsqyhNnve51sy1Cr5ZnqOPV-1DMls0EbeJnDW6Qcnh1qs14LZQClAP-tZQRl0jHhwG-8gJF_1mhx1xr58cvjeUvtanFSghHFDf-C4yVffuc0=5F550F3D

echo Using credentials:
echo Email: %FORGE_EMAIL%
echo Token: [Hidden for security]

REM First run login with the token supplied automatically
echo %FORGE_EMAIL%> email.txt
echo %FORGE_API_TOKEN%> token.txt

echo Logging into Forge...
forge login --email %FORGE_EMAIL% --token %FORGE_API_TOKEN%

echo Deploying app with --no-verify flag...
forge deploy --no-verify

echo Starting tunnel...
forge tunnel 