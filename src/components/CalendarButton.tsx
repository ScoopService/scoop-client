import styled from 'styled-components/native';
import React, {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarModal from './CalendarModal';

const Wrapper = styled.View`
  //background-color: white;
  //background-color: #A0DB90;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
`;

const Container = styled.TouchableOpacity`
  //background-color: white;
  //background-color: #A0DB90;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: #dfdfdf;
`;

const CalendarText = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  margin: 12px 90px;
`;

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.View`
  margin: 20px;
  //background-color: lightpink;
  border-radius: 20px;
  padding: 5px;
  align-items: center;
  width: 400px;
  height: 400px;
`;


const CalendarButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Wrapper>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <CenteredView style={{}}>
          <ModalView style={{}}>
            <CalendarModal />
          </ModalView>
        </CenteredView>
      </Modal>
      <Container onPress={() => setModalVisible(!modalVisible)}>
        <Ionicons
          name={'calendar'}
          size={18}
          color={'green'}
          style={{position: 'absolute', right: 310}}
        />
        <CalendarText>11월 17일 (목) ~ 11월 20일 (일)</CalendarText>
      </Container>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'lightpink',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CalendarButton;
