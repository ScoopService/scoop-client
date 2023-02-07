import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';

const Wrapper = styled.View`
  width: 320px;
  height: 250px;
  background-color: white;
`;

const printExample = () => {
  console.log('clicked!');
};

export const LocationMap = () => {
  const [GS, setGS] = useState(false);
  const [YC, setYC] = useState(false);
  const [GR, setGR] = useState(false);
  const [GC, setGC] = useState(false);
  const [YD, setYD] = useState(false);
  const [DJ, setDJ] = useState(false);
  const [GW, setGW] = useState(false);
  const [SC, setSC] = useState(false);
  const [GN, setGN] = useState(false);
  const [SP, setSP] = useState(false);
  const [GD, setGD] = useState(false);
  const [MP, setMP] = useState(false);
  const [SDM, setSDM] = useState(false);
  const [EP, setEP] = useState(false);
  const [YS, setYS] = useState(false);
  const [JR, setJR] = useState(false);
  const [JG, setJG] = useState(false);
  const [SB, setSB] = useState(false);
  const [DD, setDD] = useState(false);
  const [SD, setSD] = useState(false);
  const [GB, setGB] = useState(false);
  const [DB, setDB] = useState(false);
  const [NW, setNW] = useState(false);
  const [JRG, setJRG] = useState(false);
  const [GJ, setGJ] = useState(false);

  return (
    <Wrapper>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GS);
          setGS(!GS);
        }}>
        <Image
          source={
            !GS
              ? require('../assets/images/map/Group5870.png')
              : require('../assets/images/mapSelected/Group5870.png')
          }
          style={{
            position: 'absolute',
            width: 71.24,
            height: 60.27,
            top: 91.18,
            left: 3.85,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(YC);
          setYC(!YC);
        }}>
        <Image
          source={
            !YC
              ? require('../assets/images/map/Group5871.png')
              : require('../assets/images/mapSelected/Group5871.png')
          }
          style={{
            position: 'absolute',
            width: 44.5,
            height: 41.07,
            top: 130.86,
            left: 43.86,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GR);
          setGR(!GR);
        }}>
        <Image
          source={
            !GR
              ? require('../assets/images/map/Group5872.png')
              : require('../assets/images/mapSelected/Group5872.png')
          }
          style={{
            position: 'absolute',
            width: 60.97,
            height: 41.1,
            top: 164.12,
            left: 40.22,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GC);
          setGC(!GC);
        }}>
        <Image
          source={
            !GC
              ? require('../assets/images/map/Group5876.png')
              : require('../assets/images/mapSelected/Group5876.png')
          }
          style={{
            position: 'absolute',
            width: 41.16,
            height: 48.25,
            top: 190.08,
            left: 78.95,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(YD);
          setYD(!YD);
        }}>
        <Image
          source={
            !YD
              ? require('../assets/images/map/Group5873.png')
              : require('../assets/images/mapSelected/Group5873.png')
          }
          style={{
            position: 'absolute',
            width: 53.7,
            height: 62,
            top: 131.72,
            left: 79.59,
          }}></Image>
      </Pressable>
      {/*<Pressable*/}
      {/*  onPress={() => {*/}
      {/*    printExample();*/}
      {/*  }}>*/}
      {/*  <Image*/}
      {/*    source={require('../assets/images/map/Group5874.png')}*/}
      {/*    style={{*/}
      {/*      position: 'absolute',*/}
      {/*      top: 160.81,*/}
      {/*      left: 106.33,*/}
      {/*      width: 60.76,*/}
      {/*      height: 34.22,*/}
      {/*    }}></Image>*/}
      {/*</Pressable>*/}
      <Pressable
        onPress={() => {
          printExample();
          console.log(MP);
          setMP(!MP);
        }}>
        <Image
          source={
            !MP
              ? require('../assets/images/map/Group5885.png')
              : require('../assets/images/mapSelected/Group5885.png')
          }
          style={{
            position: 'absolute',
            width: 75.06,
            height: 46.55,
            top: 101.26,
            left: 74.24,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(EP);
          setEP(!EP);
        }}>
        <Image
          source={
            !EP
              ? require('../assets/images/map/Group5895.png')
              : require('../assets/images/mapSelected/Group5895.png')
          }
          style={{
            position: 'absolute',
            width: 52.63,
            height: 68.22,
            top: 41.4,
            left: 94.35,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(SDM);
          setSDM(!SDM);
        }}>
        <Image
          source={
            !SDM
              ? require('../assets/images/map/Group5886.png')
              : require('../assets/images/mapSelected/Group5886.png')
          }
          style={{
            position: 'absolute',
            width: 40.44,
            height: 48.27,
            top: 86.67,
            left: 110.82,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(JR);
          setJR(!JR);
        }}>
        <Image
          source={
            !JR
              ? require('../assets/images/map/Group5887.png')
              : require('../assets/images/mapSelected/Group5887.png')
          }
          style={{
            position: 'absolute',
            width: 50.49,
            height: 58.14,
            top: 63.93,
            left: 141.2,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(JG);
          setJG(!JG);
        }}>
        <Image
          source={
            !JG
              ? require('../assets/images/map/Group5884.png')
              : require('../assets/images/mapSelected/Group5884.png')
          }
          style={{
            position: 'absolute',
            width: 39.79,
            height: 19.74,
            top: 119.92,
            left: 151.47,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(YS);
          setYS(!YS);
        }}>
        <Image
          source={
            !YS
              ? require('../assets/images/map/Group5883.png')
              : require('../assets/images/mapSelected/Group5883.png')
          }
          style={{
            position: 'absolute',
            width: 46.08,
            height: 33.25,
            top: 136.87,
            left: 139.71,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GN);
          setGN(!GN);
        }}>
        <Image
          source={
            !GN
              ? require('../assets/images/map/Group5878.png')
              : require('../assets/images/mapSelected/Group5878.png')
          }
          style={{
            position: 'absolute',
            width: 77.55,
            height: 73.13,
            top: 154.66,
            left: 185.71,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(SC);
          setSC(!SC);
        }}>
        <Image
          source={
            !SC
              ? require('../assets/images/map/Group5877.png')
              : require('../assets/images/mapSelected/Group5877.png')
          }
          style={{
            position: 'absolute',
            width: 72.74,
            height: 78.52,
            top: 165.83,
            left: 166.45,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(SP);
          setSP(!SP);
        }}>
        <Image
          source={
            !SP
              ? require('../assets/images/map/Group5879.png')
              : require('../assets/images/mapSelected/Group5879.png')
          }
          style={{
            position: 'absolute',
            width: 68.96,
            height: 60.71,
            top: 149.96,
            left: 226.51,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GD);
          setGD(!GD);
        }}>
        <Image
          source={
            !GD
              ? require('../assets/images/map/Group5880.png')
              : require('../assets/images/mapSelected/Group5880.png')
          }
          style={{
            position: 'absolute',
            width: 54.66,
            height: 57.39,
            top: 111.13,
            left: 258.88,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(SD);
          setSD(!SD);
        }}>
        <Image
          source={
            !SD
              ? require('../assets/images/map/Group5882.png')
              : require('../assets/images/mapSelected/Group5882.png')
          }
          style={{
            position: 'absolute',
            width: 50.73,
            height: 32.82,
            top: 119.92,
            left: 181.62,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(SB);
          setSB(!SB);
        }}>
        <Image
          source={
            !SB
              ? require('../assets/images/map/Group5888.png')
              : require('../assets/images/mapSelected/Group5888.png')
          }
          style={{
            position: 'absolute',
            width: 68.16,
            height: 50.8,
            top: 60.5,
            left: 157.7,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(DD);
          setDD(!DD);
        }}>
        <Image
          source={
            !DD
              ? require('../assets/images/map/Group5889.png')
              : require('../assets/images/mapSelected/Group5889.png')
          }
          style={{
            position: 'absolute',
            width: 39.05,
            height: 34.97,
            top: 83.45,
            left: 193.62,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GB);
          setGB(!GB);
        }}>
        <Image
          source={
            !GB
              ? require('../assets/images/map/Group5894.png')
              : require('../assets/images/mapSelected/Group5894.png')
          }
          style={{
            position: 'absolute',
            width: 49.64,
            height: 66.08,
            top: 18.02,
            left: 164.31,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(DB);
          setDB(!DB);
        }}>
        <Image
          source={
            !DB
              ? require('../assets/images/map/Group5892.png')
              : require('../assets/images/mapSelected/Group5892.png')
          }
          style={{
            position: 'absolute',
            width: 34.45,
            height: 69.08,
            top: 3,
            left: 180.14,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(NW);
          setNW(!NW);
        }}>
        <Image
          source={
            !NW
              ? require('../assets/images/map/Group5893.png')
              : require('../assets/images/mapSelected/Group5893.png')
          }
          style={{
            position: 'absolute',
            width: 43.22,
            height: 72.94,
            top: 7.94,
            left: 216.3,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(JRG);
          setJRG(!JRG);
        }}>
        <Image
          source={
            !JRG
              ? require('../assets/images/map/Group5890.png')
              : require('../assets/images/mapSelected/Group5890.png')
          }
          style={{
            position: 'absolute',
            width: 34.87,
            height: 42.16,
            top: 76.16,
            left: 228.92,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GJ);
          setGJ(!GJ);
        }}>
        <Image
          source={
            !GJ
              ? require('../assets/images/map/Group5881.png')
              : require('../assets/images/mapSelected/Group5881.png')
          }
          style={{
            position: 'absolute',
            width: 34.45,
            height: 37.33,
            top: 118.64,
            left: 219.08,
          }}></Image>
      </Pressable>
      {/*<Pressable>*/}
      {/*  <Image*/}
      {/*    source={require('../assets/images/map/Vector736.png')}*/}
      {/*    style={{*/}
      {/*      position: 'absolute',*/}
      {/*      width: 320,*/}
      {/*      height: 246,*/}
      {/*      left: -2,*/}
      {/*    }}></Image>*/}
      {/*</Pressable>*/}
      <Image
        source={require('../assets/images/map/Vector737.png')}
        style={{
          position: 'absolute',
          width: 320,
          height: 246,
          left: -2,
          zIndex: -1,
        }}></Image>
      <Pressable
        onPress={() => {
          printExample();
          console.log(DJ);
          setDJ(!DJ);
        }}>
        <Image
          source={
            !DJ
              ? require('../assets/images/map/Group5874.png')
              : require('../assets/images/mapSelected/Group5914.png')
          }
          style={{
            position: 'absolute',
            width: 60.76,
            height: 34.26,
            top: 161.02,
            left: 106.33,
          }}></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          printExample();
          console.log(GW);
          setGW(!GW);
        }}>
        <Image
          source={
            !GW
              ? require('../assets/images/map/Group5912.png')
              : require('../assets/images/mapSelected/Group5913.png')
          }
          style={{
            position: 'absolute',
            width: 65.36,
            height: 41.24,
            top: 197.63,
            left: 105.9,
          }}></Image>
      </Pressable>
    </Wrapper>
  );
};
