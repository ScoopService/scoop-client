import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NextButton from '../components/NextButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
  flex-direction: column;
  background-color: white;
`;

const ScreenTitleView = styled.View`
  //background-color: white;
  //background-color: #bce6b1;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ResetButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: transparent;
`;

const TitleView = styled.View`
  height: 40px;
  //background-color: pink;
  margin-left: 30px;
  margin-top: 21px;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;

const TitleDescription = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #808080;
  margin-top: 7px;
`;

const SmallDescription = styled.Text`
  font-size: 12px;
  color: #c5c5c5;
`;

const AddImageContainer = styled.View`
  margin-top: 150px;
  height: 130px;
  justify-content: center;
  align-items: center;
`;

const AddImage = styled.Image`
  height: 122px;
  width: 119px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

const SelectedImage = styled.Image`
  height: 122px;
  width: 119px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  border-radius: 500px;
`;

const NextButtonContainer = styled.View`
  position: absolute;
  top: ${SCREEN_HEIGHT/1.25}px;
  width: ${SCREEN_WIDTH}px;
  justify-content: center;
  align-items: center;
  height: 100px;
  //background-color: black;
`;

type RootStackParamList = {
  SignUp: undefined; // undefined because you aren't passing any params to the home screen
  SignUpDetailsProfileNickname: undefined;
  SignUpDetailsLocation: undefined;
};

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpNavigationProp;
};

export const SignUpDetailsProfileImage = ({navigation}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        // @ts-ignore
        title: '이미지를 선택하세요',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (
          // @ts-ignore
          response.error
        ) {
          // @ts-ignore
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = {
            // @ts-ignore
            uri: response.assets[0].uri,
          };
          // @ts-ignore
          setSelectedImage(source.uri);
        }
      },
    );
  };

  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      <ScreenTitleView>
        <TouchableOpacity
          style={{marginLeft: 17}}
          onPress={() => {
            navigation.pop();
          }}>
          <MaterialIcons
            name={'arrow-back-ios'}
            size={26}
            color={'black'}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
        <View style={{marginRight: 33}}>
          <ResetButton></ResetButton>
        </View>
      </ScreenTitleView>

      <TitleView>
        <TitleText>프로필 이미지를 설정해주세요</TitleText>
        <TitleDescription>대표 이미지를 정해봐요!</TitleDescription>
      </TitleView>

      <AddImageContainer>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          {selectedImage ? (
            <SelectedImage source={{uri: selectedImage}} />
          ) : (
            <AddImage source={require('../assets/images/Group5900.png')} />
          )}
        </Pressable>
      </AddImageContainer>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <SmallDescription>
          다른 사람들이 불편해하지 않을 이미지를 사용해주세요!
        </SmallDescription>
      </View>

      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUpDetailsLocation');
          }}>
          {selectedImage ? (
            <NextButton text={'다음으로 넘어가기'} isOn={true} />
          ) : (
            <NextButton text={'다음으로 넘어가기'} isOn={false} />
          )}
        </Pressable>
      </NextButtonContainer>

      {modalVisible && (
        <View
          style={{
            position: 'absolute',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: 'black',
            opacity: 0.3,
            zIndex: 0,
          }}
        />
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              width: 280,
              height: 136,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Pressable
              onPress={pickImage}
              style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
              <Ionicons
                name="image"
                color={'#A4A4A4'}
                size={24}
                style={{marginLeft: 32}}
              />
              <Text style={{fontSize: 14, marginLeft: 25}}>
                앨범에서 사진 선택하기
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                // console.log('go!');
              }}
              style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
              <Ionicons
                name={'camera'}
                color={'#A4A4A4'}
                size={24}
                style={{marginLeft: 32}}
              />
              <Text style={{fontSize: 14, marginLeft: 25}}>사진 촬영하기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Container>
  );
};
