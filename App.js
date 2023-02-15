import { useState} from "react";
import { StyleSheet,Text,Modal, TouchableOpacity, View } from "react-native";
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
    <View style={styles.outsidecontainer}>
    <View style={styles.container}>
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
    </View>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
      backgroundColor: 'green',
      alignItems:'center',
      justifyContent:'center',
      marginVertical:100,
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
    },
    outsidecontainer:{
      flex:1,
     
    }
})
export default App;