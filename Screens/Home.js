import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home() {

  const [steps, setSteps] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Today's Activity</Text>

      <View style={styles.card}>
        <Text>👣 Steps: {steps}</Text>
        <TouchableOpacity onPress={() => setSteps(steps + 500)}>
          <Text style={styles.add}>+ Add 500</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text>💧 Water: {water} Glasses</Text>
        <TouchableOpacity onPress={() => setWater(water + 1)}>
          <Text style={styles.add}>+ Add 1</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:0},
  title: { fontSize:24, marginBottom:20 },
  card: {
    backgroundColor:"#f2f2f2",
    padding:20,
    marginBottom:15,
    borderRadius:10
  },
  add: {
    color:"green",
    marginTop:10
  }
});
