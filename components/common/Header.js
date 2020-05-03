import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'

class Header extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        const { container, textStyle } = styles;
        const { headerText } = this.props
        return (
            <View style={container}>
                <Text style={textStyle}>{headerText}</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.9,
        position: "relative",

    },
    textStyle: {
        fontSize: 20
    }
})


export { Header }