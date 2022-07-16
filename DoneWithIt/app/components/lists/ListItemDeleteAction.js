import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.danger,
        width: 70,
        height: "100%"
    }
})

export default ListItemDeleteAction;