@echo off
color 0A
echo "🐍 Installing Python..."
winget install python
cd ..
cd backend
pip install -r requirements.txt
echo "🚀 Backend installed successfully!"
cd .. 
cd others
start install_frontend.bat
