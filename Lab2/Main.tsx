import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const colors = ['pink', 'gray', 'yellow', 'red', 'blue', 'orange'];
export type UserType = {
  name: string;
  avatar: string;
};

const Main = () => {
  const [user, setuser] = useState<UserType>({
    name: 'Chưa có tên',
    avatar: 'https://e7.pngegg.com/pngimages/705/224/png-clipart-user-computer-icons-avatar-miscellaneous-heroes.png',
  });
  const [lastTimeUpdate, setlastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');
  const [footerColor, setfooterColor] = useState(colors[0]);

  // Cap nhat thong tin cho tai khoan
  const handleUpdateInfor = useCallback((_user: UserType) => {
    setuser(_user);
  }, []);

  // Random mau cho footer
  const handleRandomColor = useCallback(() => {
    const numberRan = Math.floor(Math.random() * colors.length);
    setfooterColor(colors[numberRan]);
  }, []);

  useEffect(() => {
    const currentdate = new Date();
    const datatime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds();
    setlastTimeUpdate(datatime);
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header user={user} />
      </View>
      <View style={styles.body}>
        <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor} />
      </View>
      <View style={styles.footer}>
        <Footer timeUpdate={lastTimeUpdate} backgroudColor={footerColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 2,
    justifyContent:'center',
  },
  footer: {
    flex: 1,
    justifyContent:'flex-end',
  },
});

export default Main;
