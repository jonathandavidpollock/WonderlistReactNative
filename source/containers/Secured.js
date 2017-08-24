import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button,StyleSheet, Image } from 'react-native';
import { logout } from '../redux/actions/auth';
import avatar from '../img/avatar.png'
 
class Secured extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {`Welcome, ${this.props.username}`}
                </Text>
                <View style={styles.imgWrapper}>
                    <Image source={avatar} style={styles.avatar}/>
                </View>
                <Button onPress={(e) => this.userLogout(e)} title="Logout"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:50,
        flex: 1,
        backgroundColor:'#222222',
        flexDirection:'column'
    },
    welcome: {
        fontSize:36,
        textAlign:'center',
        fontWeight:'700',
        color:'#ffffff'
    },
    imgWrapper: {
        justifyContent:'center',
    },
    avatar: {
        width:100,
        height:100
    },
})
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Secured);