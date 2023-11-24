import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [dataQuran, setDataQuran] = useState (null);
  const getData = async () => {
    try {
      const respon = await fetch('https://equran.id/api/v2/surat');
      const hasil = await respon.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <View>
      <Text>Quran</Text>
      <ScrollView>
        {dataQuran?.map((data, index) => {
          return (
            <TouchableOpacity key={index}>
              <Text >
                {data.nomor} - {data.nama}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})