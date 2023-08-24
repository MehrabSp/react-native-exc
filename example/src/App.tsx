import * as React from 'react';

import { StyleSheet, View, Text, Alert } from 'react-native';
import {
  setJSExceptionHandler,
  // setNativeExceptionHandler,
} from 'react-native-exc';

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

setJSExceptionHandler(errorHandler, true);
//setNativeExceptionHandler
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
