import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, TextInput, Button, SafeAreaView, Alert } from 'react-native';
import { useState, useCallback } from 'react';
import Radiobutton from './components/Radiobutton';
import Styles from './Styles';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [styles, setStyles] = useState(Styles.Result);
  const [promil, setPromil] = useState(0);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([
    {label: '1 Bottles', value: '1'},
    {label: '2 Bottles', value: '2'},
    {label: '3 Bottles', value: '3'},
    {label: '4 Bottles', value: '4'},
    {label: '5 Bottles', value: '5'},
    {label: '6 Bottles', value: '6'},
    {label: '7 Bottles', value: '7'},
    {label: '8 Bottles', value: '8'},
    {label: '9 Bottles', value: '9'},
    {label: '10 Bottles', value: '10'},
  ]);
  const [items2, setItems2] = useState([
    {label: '1 Hour', value: '1'},
    {label: '2 Hour', value: '2'},
    {label: '3 Hour', value: '3'},
    {label: '4 Hour', value: '4'},
    {label: '5 Hour', value: '5'},
    {label: '6 Hour', value: '6'},
    {label: '7 Hour', value: '7'},
    {label: '8 Hour', value: '8'},
    {label: '9 Hour', value: '9'},
    {label: '10 Hour', value: '10'},
  ]);
  const [gender, setGender] = useState(0)
  const options = [
    {label: 'Male', value: 0.7},
    {label: 'Female', value: 0.6},
  ]

  const [bottlesOpen, setBottlesOpen] = useState(false);
  const [hoursOpen, setHoursOpen] = useState(false);

  const onBottlesOpen = useCallback(() => {
    setHoursOpen(false);
  }, []);

  const onHoursOpen = useCallback(() => {
    setBottlesOpen(false);
  }, []);

  const calculate = () => {
    let result = 0

    const litres = value * 0.33
    const grams = litres * 8 * 4.5
    const burn = weight / 10
    const gramsLeft = grams - (burn * value2)
    result = gramsLeft / (weight * gender)

    if (result > 0 ) {
      if (result < 0.4 && result > 0) {
        setPromil(result)
        setStyles(Styles.Result4)
      }
      if (result >= 0.4 ) {
        setPromil(result)
        setStyles(Styles.Result3)
      }
    }
    else {
      setPromil(0)
      setStyles(Styles.Result2)
    }
    if (weight == 0) {
      Alert.alert('WARNING! Weight is not typed in!')
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={Styles.Header}>Alcometer</Text>
        
        <Text style={Styles.Header2}>Weight</Text>
        <TextInput keyboardType='number-pad' placeholder='Enter your weight...' value={weight} onChangeText={text => setWeight(text)}/>
        
        <Text style={Styles.Header2}>Bottles</Text>
        <DropDownPicker 
        open={bottlesOpen} onOpen={onBottlesOpen} value={value} items={items} 
        setOpen={setBottlesOpen} setValue={setValue} setItems={setItems}
        />
        
        <Text style={Styles.Header2}>Time</Text>
        <DropDownPicker 
        open={hoursOpen} onOpen={onHoursOpen} value={value2} items={items2} 
        setOpen={setHoursOpen} setValue={setValue2} setItems={setItems2}
        />

        <Text style={Styles.Header2}>Gender</Text>
        <Radiobutton options={options} onPress={(value) => {setGender(value)}}/>
        
        <Text style={styles}>{promil.toFixed(2)}</Text>
        
        <Button title='CALCULATE' onPress={calculate}/>
      </ScrollView>
    </SafeAreaView>
  );
}
