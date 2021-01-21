import React from 'react'
import Styled from 'styled-components'

interface Props {
  
}

const Container = Styled.View`
  flex:1 ;
  align-items: center;
  justify-content: center;
`
const Label = Styled.Text``;


 
const EmptyItem = ({}: Props) => {
  return (  
    <Container>
      <Label>
        하단의 + 버튼을 눌러 새로운 할 일을 등록해 본다.
      </Label>
    </Container>
  );
}
 
export default EmptyItem;