# React Native Expo Boilerplate with Gluestack UI

## Expo Version
The Expo version I am using is SDK 53

## Cloning this repository
Use the command:
```git clone https://github.com/aahilalwani25/react-native-expo.git```

## Renaming Project Name
By default, the project name is ```reactnativeboilerplate```
To rename your project

## Installing the packages
Then install the packages using Yarn. Use the command:
```yarn```

## Deploy the android app on EAS

1. Create your account or login
2. Open your project terminal, install the package ```npm install --global eas-cli```
3. Then run: ```eas login```, it will ask username/email and password. If 2FA enabled, it will ask to give OTP. Then enter. If all creds are correct, it will give successful login message.
4. Create Project on your expo account
5. copy the ins
Use command:
```eas build --platform android --profile preview```

