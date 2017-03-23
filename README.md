# React Native Component Viewer

This is a simple template app that lets you view a single component in isolation, centered on the phone screen. Only tested in Android, but should work for IOS. Contributions to test for IOS are welcome.

Useful for:
- People who want to test the look and feel of individual components in isolation
- People who want to test components for react native npm modules (e.g. react-native-calendar-picker) before including them first in their actual apps
- NPM module creators / contributors who wish to test the look and feel of their module component(s) in isolation

How to use:
- Clone Repo
- Add component file(s)
  - For npm modules, just `npm install --save <module name>`
  - For regular components, `import <component> from <file path>` in app/index.js
- Add component to app/index.js
- run `react-native run-android` or `react-native run-ios`
