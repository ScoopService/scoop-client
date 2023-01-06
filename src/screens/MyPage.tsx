import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import styled from 'styled-components/native';
import ProfileBanner from '../components/ProfileBanner';
import DateBanner from '../components/DateBanner';

const Container = styled.View`
  flex: 1;
  background-color: lightcyan;
`;

const MyGroupsBanner = styled.View`
  flex: 1;
  background-color: lightpink;
`;

const PopularGroupsBanner = styled.View`
  flex: 1;
  background-color: lightyellow;
`;

export const MyPage = () => {
  useEffect(() => {
    //console.log('GroupSearch.tsx effect');
  }, []);

  return (
    <Container>
      <ProfileBanner nickname="블루비" />
      <DateBanner></DateBanner>
      <MyGroupsBanner>
        <Text>MyGroupsBanner</Text>
      </MyGroupsBanner>
      <PopularGroupsBanner>
        <Text>PopularGroupsBanner</Text>
      </PopularGroupsBanner>
      <Text>Tab1</Text>
    </Container>
  );
};

// import React, { useContext, useEffect } from 'react'
// import { View, Text } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
// import { colors, styles } from '../theme/appTheme';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { VectorIcon } from '../components/VectorIcon';
//
// export const MyPage = () => {
//
//   const {top} = useSafeAreaInsets();
//
//   useEffect(() => {
//     //console.log('MyPage.tsx effect');
//   }, []);
//
//   return (
//     <View style={{...styles.globalMargin, marginTop: top}}>
//       <Text style={styles.title}>Icons</Text>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 50}}>
//         <Icon
//           name='american-football-outline'
//           size={40}
//           color={colors.primary}
//         />
//
//         <Icon
//           name='boat-outline'
//           size={40}
//           color={colors.primary}
//         />
//
//         <Icon
//           name='paw-outline'
//           size={40}
//           color={colors.primary}
//         />
//       </View>
//
//       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 50}}>
//         <Icon
//           name='egg-outline'
//           size={40}
//           color={colors.primary}
//         />
//
//         <Icon
//           name='hand-left-outline'
//           size={40}
//           color={colors.primary}
//         />
//
//         <Icon
//           name='leaf-outline'
//           size={40}
//           color={colors.primary}
//         />
//       </View>
//
//       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 50}}>
//         <Icon
//           name='pizza-outline'
//           size={40}
//           color={colors.primary}
//         />
//
//         <Icon
//           name='rocket-outline'
//           size={40}
//           color={colors.primary}
//         />
//
//         <Icon
//           name='wallet-outline'
//           size={40}
//           color={colors.primary}
//         />
//       </View>
//     </View>
//   )
// }
//
