import React from 'react';
import {View} from 'react-native';
import Ball from '../atoms/Ball';
import QyroscopeText from '../atoms/QyroscopeText';

interface QyroscopeBoxProps {
  QyroX: number;
  QyroY: number;
  QyroZ: number;
  AccX: number;
  AccY: number;
}

const QyroscopeBox: React.FC<QyroscopeBoxProps> = ({
  QyroX,
  QyroY,
  QyroZ,
  AccX,
  AccY,
}) => {
  return (
    <View>
      <QyroscopeText x={QyroX} y={QyroY} z={QyroZ} />
      <Ball AccX={AccX} AccY={AccY} />
    </View>
  );
};

export default QyroscopeBox;
