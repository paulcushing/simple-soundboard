import Layout from '../components/Layout'

const sounds = [
  {
    name : 'Coin',
    file : "/sounds/coin.mp3",
    audio : null
  },
  {
    name : '1 Up',
    file : "/sounds/1up.mp3",
    audio : null
  },
  {
    name : 'Game Over',
    file : "/sounds/gameover.mp3",
    audio : null
  },
  {
    name : 'Power Up',
    file : "/sounds/powerup.mp3",
    audio : null
  }
];

function playSound(audio) {
  sounds.forEach((sound) => {
    sound.audio.pause();
    sound.audio.currentTime = 0;
  })

  audio.play();
}

const IndexPage = () => (
  <Layout title="Paul's Soundboard">
    <h1 className="text-center text-2xl">Welcome to Paul's Soundboard! 👋</h1>
    {process.browser ? 
    sounds.map((sound) => {
      const btnId = sound.name + 'btn';
      sound.audio = typeof Audio !== "undefined" ? new Audio(sound.file) : undefined;
      sound.audio.addEventListener('ended', (event) => {
        document.getElementById(btnId).blur();
      })
      return (
      <p key={sound.name}>

        <button id={btnId} onClick={ () => playSound(sound.audio)} className="my-2 px-8 py-4 w-full rounded text-white text-xl shadow-lg bg-blue-600 focus:shadow-sm">{sound.name}</button>
      </p>
    )})
  : null
  }
  </Layout>
)

export default IndexPage
