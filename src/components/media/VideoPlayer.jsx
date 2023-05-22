export default function VideoPlayer () {
  const videoStyle = { width: 700, heigt: 400 }
  return (
        <div>
            <h1>Great Moments </h1>
            <video autoPlay controls style={videoStyle}>
                <source src="/moment.mp4" type="video/mp4" />
            </video>
        </div>
  )
}
