# robofriends-pwa

adding PWA capabilities to a react app

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

## Testing

```shell
npm i --save-dev enzyme enzyme-adapter-react-16
yarn add --dev react-test-renderer

```

Test Coverage

```shell
npm test

# to fix issue of not showing all files without tests in coverage
CI=true npm test -- --coverage --color --watch
# or
npm test -- --coverage --watchAll=false
```
