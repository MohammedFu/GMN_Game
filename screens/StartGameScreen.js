import { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title.android';
import Colors from '../constants/colors.android';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 350 ? 20 : 90;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
// import { useState } from 'react';
// import { TextInput, View, StyleSheet, Alert, Dimensions } from 'react-native';

// import Card from '../components/ui/Card';
// import PrimaryButton from '../components/ui/PrimaryButton';
// import Title from '../components/ui/Title';
// import Colors from '../constants/Colors';
// import InstructionText from '../components/ui/InstructionText';

// function StartGameScreen({onPickNumber}) {
//   const [enteredNumber, setEnteredNumber] = useState('');

//   function numberInputHandler(enteredText) {
//     setEnteredNumber(enteredText);
//   }

//   function resetInputHandler() {
//     setEnteredNumber('');
//   }

//   function confirmInputHandler() {
//     const chosenNumber = parseInt(enteredNumber);

//     if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
//       Alert.alert(
//         'Invalid number!',
//         'Number has to be a number between 1 and 99.',
//         [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
//       );
//       return;
//     }

//     onPickNumber(chosenNumber);
//   }

//   return (
//     <View style={styles.rootContainer}>
//       <Title>Guess my Number</Title>

//     <Card>
//       <InstructionText>Enter a number</InstructionText>
//       <TextInput
//         style={styles.numberInput}
//         maxLength={2}
//         keyboardType="number-pad"
//         autoCapitalize="none"
//         autoCorrect={false}
//         onChangeText={numberInputHandler}
//         value={enteredNumber}
//       />
//       <View style={styles.buttonsContainer}>
//         <View style={styles.buttonContainer}>
//           <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
//         </View>
//         <View style={styles.buttonContainer}>
//           <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
//         </View>
//       </View>
//       </Card>
//     </View>
//   );
// }

// export default StartGameScreen;

// // const devicHight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     // marginTop: devicHight < 350 ? 20 : 80,
//     alignItems: 'center',
//   },
//   numberInput: {
//     height: 60,
//     width: 50,
//     fontSize: 32,
//     borderBottomColor: Colors.accent500,
//     borderBottomWidth: 2,
//     color: Colors.accent500,
//     marginVertical: 8,
//     textAlign: 'center',
//     fontFamily: "open-sans-bold",
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//   },
//   buttonContainer: {
//     flex: 1,
//   },
  
// });