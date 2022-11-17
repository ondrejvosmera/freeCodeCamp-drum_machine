import React from 'react'
import './App.css'

const sounds = [
  {
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }
]
 
const App = () => (
  <div className='App'>
    <div className='pad'>
      <h2 className='display'>Play a sound</h2>
        {sounds.map((sound, index) => (
            <Button text={sound.key} key={index} audio={sound.mp3}/>
        ))}
     </div>
  </div>
);

class Button extends React.Component {

  constructor(props) {
    super(props);

    this.audio = React.createRef()
  }

  playSound = () => {
    this.audio.current.play();

    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    display.querySelector('h2').innerText = `${id} is playing`;
  }

  render() {
    const { text, audio } = this.props;

    return (
      <div className='button' onClick={this.playSound}>
        {text}
        <audio ref={this.audio} src={audio} className='clip' id={text}/>
      </div>
    )
  }
}

document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if(audio) {
    const parent = audio.parentNode;
    parent.classList.add('active');
    audio.play();

    const display = parent.parentNode;
    display.querySelector('h2').innerText = `${id} is playing`;

    audio.addEventListener('ended', () => {
      parent.classList.remove('active');
    });
  }
});

export default App;
