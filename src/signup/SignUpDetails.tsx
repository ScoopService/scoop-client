import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Tutorial} from '../carousel/Tutorial';
import WelcomeCarousel from '../carousel/WelcomeCarousel';
import {NavigationActions} from 'react-navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NextButton from '../components/NextButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

const ScreenTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
`;

const ResetButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: transparent;
`;

const LogoContainer = styled.View`
  height: 248px;
  width: ${SCREEN_WIDTH}px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  //background-color: pink;
`;

const LogoImg = styled.Image`
  width: 248px;
  height: 243px;
  object-fit: contain;
  margin-left: 8px;
  align-self: center;
`;

const LogoImgSecond = styled.Image`
  width: 223px;
  height: 232px;
  object-fit: contain;
  align-self: center;
`;

const LogoImgThird = styled.Image`
  width: 254px;
  height: 167px;
  object-fit: contain;
  align-self: flex-end;
`;

const DetailLogo = styled.Image`
  width: 223px;
  height: 223px;
  object-fit: contain;
  align-self: flex-end;
`;

const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const LogoText = styled.Text`
  margin-top: 6px;
  font-size: 20px;
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
  HomeBottomTabs: undefined;
  SignUpDetailsAgreement: undefined;
};

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpNavigationProp;
};

export const SignUpDetails = ({navigation}: Props) => {
  // const [open, setOpen] = useState(false);
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
        <ScreenTitle>????????????</ScreenTitle>
        <View style={{marginRight: 33}}>
          <ResetButton>?????????</ResetButton>
        </View>
      </ScreenTitleView>

      <LogoContainer>
        <DetailLogo source={require('../assets/images/Ellipse202.png')} />
      </LogoContainer>
      <TextContainer>
        <LogoText style={{fontWeight: '600'}}>????????? ?????? ??????</LogoText>
        <LogoText style={{fontWeight: '600'}}>???????????? ?????? ????????????!</LogoText>
        <LogoText style={{fontSize: 16, color: '#808080', marginTop: 20}}>
          ?????? ????????? ???????????? ????????????
        </LogoText>
        <LogoText style={{fontSize: 16, color: '#808080'}}>
          ????????? ????????? ???????????????!
        </LogoText>
      </TextContainer>
      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUpDetailsAgreement');
          }}>
          <NextButton text={'???????????? ??????'} isOn={true} />
        </Pressable>
      </NextButtonContainer>
    </Container>
  );
};
