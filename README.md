# General Bots Online user interface

# Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
# Docs

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo


# Mail 
Stalwart

# Drive

Garage

# Chat 

RPC-like


# Setup VM

## Install RDP and XFCE on Ubuntu 
sudo apt update && sudo apt install -y xfce4 xfce4-goodies xrdp && echo "xfce4-session" > ~/.xsession && sudo sed -i 's/^exec/#exec/' /etc/xrdp/startwm.sh && echo "exec startxfce4" | sudo tee -a /etc/xrdp/startwm.sh && sudo systemctl enable --now xrdp 

## Stalwart 

curl --proto '=https' --tlsv1.2 -sSf https://get.stalw.art/install.sh -o install.sh 
sudo sh install.sh /path/to/install 

## Chrome 

wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add - sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list' sudo apt update sudo apt install google-chrome-stable 

# Ngix
sudo apt install -y nginx
sudo systemctl enable --now nginx

