import React, {useEffect, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import g from "../assets/styles/global";

const EditColleagueScreen = ({ route }) => {
    const { colleague } = route.params;

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('active');

    const handleEditColleague = () => {

    }

    const setInitialValue = () => {
        setEmail(colleague.email);
        setFirstName(colleague.firstName);
        setLastName(colleague.lastName);
        setStatus(colleague.status);
    }

    useEffect(() => {
        setInitialValue();
    }, [])

    return (
        <View style={g.form.container}>
            <TextInput
                style={g.form.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mailadres"
                keyboardType="email-address"
            />
            <TextInput
                style={g.form.input}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First Name"
            />
            <TextInput
                style={g.form.input}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
            />
            {/*<Select value={status} onChange={setStatus()}>*/}
            {/*    <Option value='active'>Active</Option>*/}
            {/*    <Option value='inactive'>Inactive</Option>*/}
            {/*</Select>*/}
            <Button title="Change Colleague Data" onPress={handleEditColleague} />
        </View>
    );
};

export default EditColleagueScreen;
