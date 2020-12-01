import React from 'react';
import { Provider } from 'react-redux';
import store from './src/actions/Store'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Flex2} from './src/assets/styles/ViewStyles';
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
