import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {gyroscope, accelerometer} from 'react-native-sensors';
import QyroscopeBox from '../molecules/QyroscopeBox';

const Qyroscope = () => {
  const [qyroscopeData, setQyroscopeData] = useState<{
    x: number;
    y: number;
    z: number;
  }>({x: 0, y: 0, z: 0});
  const [accelerometerData, setAccelorometerData] = useState<{
    x: number;
    y: number;
  }>({x: 0, y: 0});
  useEffect(() => {
    gyroscope.subscribe(({x, y, z}) => {
      setQyroscopeData({x, y, z});
    });
    accelerometer.subscribe(({x, y}) => {
      setAccelorometerData({x, y});
    });
  }, []);

  return (
    <View style={styles.main}>
      <QyroscopeBox
        QyroX={qyroscopeData.x}
        QyroY={qyroscopeData.y}
        QyroZ={qyroscopeData.z}
        AccX={accelerometerData.x}
        AccY={accelerometerData.y}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Qyroscope;
