import styled from 'styled-components';
import FullscreenOverlay from '../../styled-components/fullscreenOverlay';

export const Container = styled(FullscreenOverlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.02);
`

export const InnerContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 200px;
  width: 200px;
  border-radius: 20px;
  box-shadow: 0 0 2px rgba(0,0,0,0.1);
`

export const Input = styled.input`
  width: 100%;
  height: 20;
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid black;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`

export const TextError = styled.p`
  font-size: 12px;
  text-align: center;
  color: red;
`