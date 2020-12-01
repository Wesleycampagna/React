import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const Video = props => {
    console.log(props)
    return <View>
            <Text>Playlist: { props.playlist }</Text>
            <Text>Música: { props.music }</Text>
        </View>
}

const mapStateToProps = state => (
    {
        music: state.musicControl.activeMusic.name ? state.musicControl.activeMusic.name : '',
        playlist: state.musicControl.activePlaylist.title ? state.musicControl.activePlaylist.title : ''
    }
)


export default connect(mapStateToProps)(Video)
