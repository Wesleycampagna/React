import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CardMusic} from '../../assets/styles/ViewStyles';
import action from '../../redux/action/musicAction'

const SideBar = ({ playlist, selectMusicAndPlaylist }) => {

    let [selected, setSelected] = useState(1)

    return (
        <View>
                {playlist.map(item => (
                    <View key={item.id}>
                        <Text>{item.title}</Text>
                        <Text>{item.style}</Text>
                        {item.musicList.map(music => (
                            <CardMusic
                                key={music.id}
                                onPress={() => selectMusicAndPlaylist(item, music)}
                            >
                                <Text>{music.name}</Text>
                                <Text>{music.artist}</Text>
                                {music.album ? <Text>{music.album}</Text> : undefined }
                                {music.composer ? <Text>{music.composer}</Text> : undefined }
                            </CardMusic>
                        ))}
                    </View>
                ))}
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    selectMusicAndPlaylist: (item, music) => dispatch(action.selectMusicAndPlaylist(item, music))
})

const mapStateToProps = state => ({ playlist: state.musicControl.music })

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
