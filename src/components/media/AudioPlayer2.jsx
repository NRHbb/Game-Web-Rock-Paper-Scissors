/* eslint-disable react/react-in-jsx-scope */
export default function AudioPlayer2 () {
  return (
        <div className="audio-container">
            <audio controls autoPlay={true}>
                <source src="/gamepage.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
  )
}
