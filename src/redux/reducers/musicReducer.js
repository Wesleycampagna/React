const initialState = {
    activeMusic: {},
    activePlaylist: {},
    music: [
        {
            id: 1,
            title: 'Rock playlist',
            style: 'Rock',
            musicList: [
                { id: 1, artist: 'Kensington', name: 'St. Helena', album: '', composer: '', link: ''},
                { id: 2, artist: 'Queensryche', name: 'The Neddles Lies', album: 'Operation: mindcrime', composer: '', link: ''}
            ]
        },
        {
            id: 2,
            title: 'Música brasileira',
            style: 'pop/rock',
            musicList: [
                { id: 3, artist: 'Los Hermanos', name: 'O vencedor', album: '', composer: '', link: ''},
                { id: 4, artist: 'Charlie Brown Jr', name: 'Dias de luta, dias de glória', album: '', composer: 'Chorão', link: ''}
            ]
        }
    ]
}

/* reducer have be that way - function */
export default function musicControl(state = initialState, action) {
    if (action.type === 'TOGGLE_PLAYLIST')
        return {
            ...state,
            activeMusic: action.music,
            activePlaylist: action.playlist
        }
    return state
}
