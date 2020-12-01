import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/Store/Store';
import {Text, View} from 'react-native';
import SideBar from './src/components/sidebar/SideBar';
import Video from './src/components/video/Video';


const App = () => {
  return (
    <Provider store={ store }>
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>teste</Text>
            <Video/>
            <SideBar/>
        </View>
    </Provider>
  );
};

export default App;
