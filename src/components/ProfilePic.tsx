import styled from 'styled-components/native';

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  margin-left: 25px;
`;

interface Props {
  path: string;
}

export const ProfilePic = (props: Props) => {
  return <ProfileImage source={require(props.path)} />;
};
