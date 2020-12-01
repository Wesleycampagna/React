const selectMusicAndPlaylist = (playlist, music) => {
    console.log("click")
    return  {
        type: 'TOGGLE_PLAYLIST',
        playlist,
        music
    }
}

export default {
    selectMusicAndPlaylist
}

