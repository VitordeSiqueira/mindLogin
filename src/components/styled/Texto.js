import React from 'react'
import styled from 'styled-components/native'
import themes from '../../themes'

export const Titulo = styled.Text`
text-align: center;
color: ${themes.padrao.colors.brand.roxo};
font-size: 30px;
margin-top: 16px;
margin-bottom: 16px;
`

const LinkLegenda = styled.TouchableOpacity`
flex-direction: row;
height: 32px;
margin-top: 8px;
border-radius: 0px;
justify-content: center;
align-items: center;
`
export const Legenda = styled.Text`
margin-left: 16px;
font-size: 14px;
color: ${themes.padrao.colors.brand.roxo};
`

export const StyledLinkLegenda = ({ text, onPress }) => {
    return (
        <LinkLegenda
            onPress={onPress}>
            <Legenda>{text}</Legenda>
        </LinkLegenda>
    )
}