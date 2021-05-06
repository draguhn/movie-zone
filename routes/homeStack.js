import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';

// configuartion of all different screens - it is structures as stack. Home comes firdt than details
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Movie-Zone',
      headerStyle: {backgroundColor: '#eee'}
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Movie-Details',
      headerStyle: {backgroundColor: '#eee'}
    }
  }
}

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60}
  }
})

// export default createAppContainer(homeStack)
export default createAppContainer(homeStack)