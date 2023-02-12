import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Modal, TurboModuleRegistry } from 'react-native';
import React, {useState} from 'react';
import Calendar from 'react-native-calendars/src/calendar';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return(
    <View>
      <TouchableOpacity onPress={() => setShowModal(true)} style={{backgroundColor: 'black', borderRadius: 10,
    margin: 40, padding: 10, width: 200, alignItems: 'center'}}>
        <Text style={{  color: 'white', fontSize: 22}}>Show Calendar</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar style={{borderRadius: 10, elevation: 4, margin: 40}}
        onDayPress={date =>{ 
        console.log(date)
        setShowModal(false)
        }}  
        onMonthChange={() => {}}
        initialDate={'2022-09-10'}
        minDate={"2022-01-01"}
        maxDate={'2024-12-31'}
        hideExtraDays={true}
        // disableArrowLeft={true}
        // disableArrowRight={true}
        // hideArrows={true}
        // hideDayNames={true}

        //single dot
        // markedDates = {{'2022-09-10': {marked:true, dotColor: 'red', selected: true,
        // selectedColor: 'purple', selectedTextColor: 'white'}}}
        
        //marked = puts a dot under the date, dotColor changes that dot
        //selected puts a circle around the number, selectedColor changes the color of that

        //multidot
        // markingType={'multi-dot'}
        // markedDates={{
        //   '2022-09-15': {dots: [{color: "red"}, {color: "green"}], 
        //     selected: true, selectedColor: 'lightblue', selectedTextColor: 'black'},
        //   '2022-09-20': {dots: [{color: 'orange'}]}
        // }}

        //have an array of dot colors and can add multiple dates

        //periods 
        // markingType={'period'}
        // markedDates={{
        //   //for a range selection
        //   '2022-09-12': {startingDay: true, color: "lightgreen"}, 
        //   '2022-09-13' : {marked:true, color: "lightgreen", dotColor: 'transparent'},
        //   //repeat for the other days within the range 
        //   '2022-09-16': {endingDay: true, color: "lightgreen"},

        //   //for singe date selection
        //   '2022-09-25': {startingDay: true, endingDay: true, color: 'orange'}
        // }}

        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
