import React from "react"
import styled, { css } from "@emotion/native"

const CustomButton = props => (
	<ButtonContainer
		onPress={() => alert("This is a button, but it doesn't do a thing besides this silly alert. eventually it will route to the student list page")}
		backgroundColor={props.backgroundColor}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>
)

export default CustomButton

const ButtonContainer = styled.TouchableOpacity`
	margin: 15px;
	border: 2px solid red;
	width: 80px;
	height: 80px;
	padding: 12px;
	border-radius: 100px;   
  background-color: ${props => props.backgroundColor};
`

const ButtonText = styled.Text`
	font-size: 20px;
	color: ${props => props.textColor};
	text-align: center;
`