import { useState} from "react";
import { StyleSheet,Text,View,Modal, TouchableOpacity, SafeAreaView } from "react-native";
import { ModalPicker } from "./components/ModalPicker";

const App = () => {
  const [chooseData,setChooseData] = useState('Select item')
  const [isModalVisible,setisModalVisible] = useState(false)

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }
const setData = (option)=>{
    setChooseData(option)

}

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={()=> changeModalVisibility(true)}
      >
        <Text style={styles.text}> {chooseData } </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={()=>changeModalVisibility(false)}
      >
        <ModalPicker
         changeModalVisibility={changeModalVisibility}
         setData={setData}
        />
      </Modal>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'green',
      alignItems:'center',
      justifyContent:'center',
      padding:20
    },
    text:{
      marginVertical:20,
      fontSize:25
    },
    TouchableOpacity:{
      backgroundColor:'orange',
      alignSelf:'stretch',
      paddingHorizontal:20
    }
})
export default App;