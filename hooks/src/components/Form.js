import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorrect: false,
})`
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 20px;
`;

const StyledText = styled.Text`
    font-size: 24px;
    margin:10px;
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const refName = useRef(null);
    const refemail = useRef(null);

    useEffect(() => {
        console.log('\n===== Form Components Mount =====\n');
        refName.current.focus();
        return () => console.log('\n===== Form Components Unmount =====\n');
    }, []);

    return (
        <>
            <StyledText> name: {name} </StyledText>
            <StyledText> email: {email} </StyledText>

            <StyledTextInput
                value= {name}
                onChangeText = {text => setName(text)}
                placeholder = "name"
                ref = {refName}
                returnKeyType="next"
                onSubmitEditing={() => refemail.current.focus()}
            />
            
            <StyledTextInput
                value= {email}
                onChangeText = {text => setEmail(text)}
                placeholder = "email"
                ref={refemail}
                returnKeyType="done"
            />
            </>

    );
};

export default Form;