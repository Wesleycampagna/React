import React, { useState } from 'react'
import {Text, View} from 'react-native';
import { connect } from 'react-redux'
import {CardMusic} from '../../assets/styles/ViewStyles';

const SideBar = ({ playlist }) => {

    let [selected, setSelected] = useState(1)

    const selectMusic = (musicId) => {
        setSelected(selected = musicId)
    }

    return (
        <View>
                {playlist.map(item => (
                    <View key={item.id}>
                        <Text>{item.title}</Text>
                        <Text>{item.style}</Text>
                        {item.musicList.map(music => (
                            <CardMusic
                                key={music.id}
                                onClick={selectMusic}
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

const mapStateToProps = state => ({ playlist: state.music })

export default connect(mapStateToProps)(SideBar)
