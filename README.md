# react-native-exc

New React Native program error management library

Inspired by: 
[react-native-exception-handler](https://github.com/a7ul/react-native-exception-handler)

## Installation

```sh
npm install react-native-exc
```

## Auto-Linking Setup (react-native >= 0.60)

### iOS

```bash
$ cd ios
$ pod install
```

### Android

No further steps should be taken

## Usage example

```js
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exc';
const errorHandler = (e: any, isFatal: any) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}

        We will need to restart the app.
        `,
      [
        {
          text: 'Restart',
          onPress: () => {
            console.log('restart');
          },
        },
      ]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler);

//...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

MRB
