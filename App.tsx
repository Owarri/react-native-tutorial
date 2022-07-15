import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <TouchableHighlight onPress={() => console.log('Image tapped')}>
      <Image 
        blurRadius={5}
        source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
      <Button color="orange" title='Alert Dialog' 
      onPress={() => Alert.alert("Alert", "Some message", [
        {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
        {text: "OK", onPress: () => console.log("OK Pressed")},
      ])} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
