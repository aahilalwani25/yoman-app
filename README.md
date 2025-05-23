# React Native Expo Boilerplate with Gluestack UI

## Expo Version
The Expo version I am using is SDK 52

## Cloning this repository
Use the command:
```git clone https://github.com/aahilalwani25/react-native-expo.git```

## Installing the packages
Then install the packages using Yarn. Use the command:
```yarn```

## Build APK locally
1. run ```npx react-native start```

## Deploy the android app on EAS

1. Create your account or login
2. Open your project terminal, install the package ```npm install --global eas-cli```
3. Then run: ```eas login```, it will ask username/email and password. If 2FA enabled, it will ask to give OTP. Then enter. If all creds are correct, it will give successful login message.
4. Create Project on your expo account, copy the command ```eas init --id project-id```, and run it on your terminal
5. Run command:```eas build:configure```
6. ```eas build --platform android --profile preview|development|production```
