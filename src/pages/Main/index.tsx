import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

import { Container, Tilte } from './styles'
import { Text } from 'react-native';

const Main: React.FC = () => {

    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b): string {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
    }

    return (
        <Container background={rgbToHex(red, green, blue)}>
            <Text>RGB({red},{green},{blue})</Text>
            <Tilte>{rgbToHex(red, green, blue).toUpperCase()}</Tilte>
            <Text>Vermelho</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor="#f00"
                maximumTrackTintColor="#000000"
                value={red}
                onValueChange={v => setRed(Math.floor(v))}
            />
            <Text>Verde</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor="#0f0"
                maximumTrackTintColor="#000000"
                value={green}
                onValueChange={v => setGreen(Math.floor(v))}
            />
            <Text>Azul</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor="#00f"
                maximumTrackTintColor="#000000"
                value={blue}
                onValueChange={v => setBlue(Math.floor(v))}
            />
        </Container>
    )
}

export default Main;