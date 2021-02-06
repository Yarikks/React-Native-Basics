import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;
const COLOR_DECREMENT = -10;

const reducer = (state, action) => {
  // state is { red: number, green: number, blue: number };
  // action is { type: change_red/change_green/change_blue, payload: number }

  switch (action.type) {
    case 'change_red': {
      const updatedPayload = state.red + action.payload;
      return updatedPayload > 255 || updatedPayload < 0
        ? state
        : { ...state, red: updatedPayload };
    }
    case 'change_green': {
      const updatedPayload = state.green + action.payload;
      return updatedPayload > 255 || updatedPayload < 0
        ? state
        : { ...state, green: updatedPayload };
    }
    case 'change_blue': {
      const updatedPayload = state.blue + action.payload;
      return updatedPayload > 255 || updatedPayload < 0
        ? state
        : { ...state, blue: updatedPayload };
    }
    default:
      return state;
  }
};

const ColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: COLOR_DECREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: COLOR_DECREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: COLOR_DECREMENT })}
      />

      <View
        style={{
          height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`, alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default ColorScreen;
