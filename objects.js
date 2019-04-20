var playlist = ({artistName: 'Slowdive', songTitle: 'Allison'});
function updatePlaylist (playlist, artistName, songTitle ) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
playlist['My Bloody Valentine'] = 'Sometimes';
playlist['Phil Ochs'] = "Here's to the State of Mississippi";

function 
delete playlist['Slowdive'];


// var updatePlaylist = ({artistName, songTitle});

// ('updatePlaylist(playlist, artistName, songTitle)', () => {
//     before(() => {
//       playlist['Slowdive'] = 'Alison'
//       playlist['My Bloody Valentine'] = 'Sometimes'
//     })

//     it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
//       updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

//       expect(playlist).
//         to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
//     })
//   })
// Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.