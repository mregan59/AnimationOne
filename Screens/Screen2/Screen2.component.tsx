import * as React from 'react';
import { Button, View, Text } from 'react-native';

export const Screen2 = props => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text> Screen 2</Text>
            <Button
                title="Go to Screen1"
                onPress={() => props.navigation.navigate('Screen1')}
            />
        </View>
    );
};
