import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface QyroscopeTextProps {
  x: number;
  y: number;
  z: number;
}

const QyroscopeText: React.FC<QyroscopeTextProps> = ({x, y, z}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>X:{x.toFixed(2)}</Text>
      <Text style={styles.text}>Y:{y.toFixed(2)}</Text>
      <Text style={styles.text}>Z:{z.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
  },
});

export default QyroscopeText;
