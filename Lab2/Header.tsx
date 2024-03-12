import { View, Text, Image, StyleSheet } from 'react-native';
import React, { FC, memo } from 'react';
import { UserType } from './Main';

type HeaderType = {
  user: UserType;
};

const Header: FC<HeaderType> = memo((props) => {
  const { user } = props;
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Chào ngày mới</Text>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'gray',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greetingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  userName: {
    fontSize: 14,
    color: 'white',
  },
});

export default Header;
