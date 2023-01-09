import styled from 'styled-components'

export const ModalWrapperStd = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentStd = styled.div`
  position: relative;
  z-index: 10;
  background-color: #375a7f;
	color: #fff;
  border-radius: 5px;
  padding: 60px 15px;
  max-width: 768px;
	width: 100%;
	max-height: 768px;
	height: 100%;
  margin: 0 auto;
`;

export const CloseButtonStd = styled.button`
	-webkit-appearance: none;
	font-weight: 900;
	font-size: 40px;
	line-height: 1;
	color: #fff;
	border: none;
	cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
	padding: 10px 20px;
  background: transparent;
`;

export const BackgroundStd = styled.div`
  background: black;
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const FigureStd = styled.figure`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px;
`

export const FigcaptionStd = styled.figcaption`
	font-size: 18px;
	margin: 10px 0;
`