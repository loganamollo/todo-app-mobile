import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Task(props) {

  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}>
            </View>
                <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5,
    },
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        height: 24,
        width: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 20,
    },
    text: {
        maxWidth: '80%',
    },  
})