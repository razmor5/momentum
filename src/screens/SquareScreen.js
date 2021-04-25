import React , { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_VALUE = 15;
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number}
    //action === { type: 'change_red' || 'change_green' || 'change_blue', payload: COLOR_VALUE || -COLORVALUE}
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0 });
    const { red, green, blue } = state;
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);
    // const setColor = (color, value) => {
    // switch (color) {
    //     case 'red':
    //         red + value > 255 || red + value < 0 ? null : setRed(red + value);
    //         return;
    //     case 'green':
    //         green + value > 255 || green + value < 0 ? null : setGreen(green + value);
    //         return;
    //     case 'blue':
    //         blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
    //         return;
    //     default:
    //         return;
    // }
    // };
    return (
        <View>
            <ColorCounter
                onIncrease = {() => dispatch({ type: 'change_red', payload: COLOR_VALUE })} 
                onDecrease = {() => dispatch({ type: 'change_red', payload: -COLOR_VALUE })}
                color = 'Red' />
            <ColorCounter
                onIncrease = {() => dispatch({ type: 'change_green', payload: COLOR_VALUE })} 
                onDecrease = {() => dispatch({ type: 'change_green', payload: -COLOR_VALUE })}
                color = 'Green' />
            <ColorCounter
                onIncrease = {() => dispatch({ type: 'change_blue', payload: COLOR_VALUE })} 
                onDecrease = {() => dispatch({ type: 'change_blue', payload: -COLOR_VALUE })}
                color = 'Blue' />
                 <View style = {{ marginHorizontal : 100, marginVertical: 50, height: 200, width: 200, backgroundColor: `rgb(${red},${green},${blue})` }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 30
    }
});

export default SquareScreen;