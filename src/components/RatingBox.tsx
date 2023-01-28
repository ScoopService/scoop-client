import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Wrapper = styled.View`
  background-color: #39cb51;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 10px;
  width: 27px;
  height: 16px;
`;

const Rating = styled.Text`
  color: white;
  font-size: 10px;
  margin: 1px 6px;
`;

interface RatingProps {
  score: number;
}

export const RatingBox = (props: RatingProps) => {
  let rating: string = Number.parseFloat(String(props.score)).toFixed(1);

  if (Number(rating) < 3) {
    return (
      <Wrapper style={{backgroundColor: '#FF613F'}}>
        <Rating>{rating}</Rating>
      </Wrapper>
    );
  } else if (Number(rating) >= 3 && Number(rating) < 4) {
    return (
      <Wrapper style={{backgroundColor: '#FFD748'}}>
        <Rating>{rating}</Rating>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper style={{backgroundColor: '#39CB51'}}>
        <Rating>{rating}</Rating>
      </Wrapper>
    );
  }
};
