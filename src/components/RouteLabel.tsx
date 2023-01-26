import styled from 'styled-components/native';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Wrapper = styled.View`
  background-color: #39cb51;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: ${SCREEN_WIDTH}px;
  height: 50px;
  border-bottom: white;
  border-bottom-width: 3px;
`;

interface RouteLabelProps {
  title: string;
  route: string;
}

export const RouteLabel = (props: RouteLabelProps) => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};
