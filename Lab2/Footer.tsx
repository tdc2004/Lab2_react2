import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FooterProps {
  timeUpdate: string;
  backgroudColor: string;
}

const Footer: React.FC<FooterProps> = memo(({ timeUpdate, backgroudColor }) => {
  return (
    <View style={[styles.footerContainer, { backgroundColor: backgroudColor }]}>
      <Text style={styles.lastUpdateText}>Last Update: {timeUpdate}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  footerContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastUpdateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Màu chữ
  },
});

export default Footer;
