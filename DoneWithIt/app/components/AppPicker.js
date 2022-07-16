
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';


function AppPicker({ icon, items, onSelectItem, selectedItem, PickerItemComponent = PickerItem, placeholder, numberOfColumns = 1, width = "100%" }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={25}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    }
                    {selectedItem ?
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                        : <AppText style={styles.placeholder}>{placeholder}</AppText>
                    }

                    {icon &&
                        <MaterialCommunityIcons
                            name="chevron-down"
                            size={25}
                            color={colors.medium}
                        />
                    }
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide' >
                <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    }
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    }
})

export default AppPicker;