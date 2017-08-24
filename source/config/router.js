import React from 'react'
import {StackNavigator} from 'react-navigation'
import Main from '../components/main'
import {connect} from 'react-redux'
import { logout } from '../redux/actions/auth';
import * as ActionCreators from '../redux/actions/auth'
import bindActionCreators from 'redux'


export const Router = StackNavigator({
    Home: {
      screen: Main, 
      navigationOptions: ({ navigation, tintColor }) => ({
        title:`Welcome`.toUpperCase(),
        headerStyle: {
          backgroundColor:'#41873f',
        },
        headerTintColor:'#ffffff'
      }),
    }
  })


function mapStateToProps(state) {
    return { user: state.user }
   }
   
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    }
}
   
   
export default connect(mapStateToProps, mapDispatchToProps)(Router)