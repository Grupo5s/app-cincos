import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
function Loading5S (props) {
    const { color, overlayColor, textStyle, textContent, visible } = props;
    return   <Spinner
        visible={visible}
        color={color}
        textContent={textContent}
        overlayColor={overlayColor}
        textStyle={textStyle}
    />
}

export default Loading5S;