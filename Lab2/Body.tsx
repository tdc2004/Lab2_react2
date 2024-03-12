import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React, { FC, memo, useState } from 'react';
import { UserType } from './Main';

type BodyType = {
    onUpdateInfor: (user: UserType) => void;
    onClickChangeBgFooter: () => void;
}

const Body: FC<BodyType> = memo(props => {
    const { onUpdateInfor, onClickChangeBgFooter } = props;
    const [name, setname] = useState('');
    const [linkImage, setlinkImage] = useState('');

    const handleChangeInfo = () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfor({ name, avatar: linkImage });
        } else {
            Alert.alert('Không được bỏ trống');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên"
                value={name}
                onChangeText={(text) => setname(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Nhập link ảnh"
                value={linkImage}
                onChangeText={(text) => setlinkImage(text)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleChangeInfo}
            >
                <Text style={styles.buttonText}>Cập nhật thông tin</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={onClickChangeBgFooter}
            >
                <Text style={styles.buttonText}>Đổi màu Footer</Text>
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Body;
