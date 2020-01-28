import * as React from 'react';
import { Button, View, Text } from 'react-native';

export const Screen1 = props => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text> Screen 1</Text>
            <Button
                title="Go to Screen2"
                onPress={() => props.navigation.navigate('Screen2')}
            />
        </View>
    );
};
