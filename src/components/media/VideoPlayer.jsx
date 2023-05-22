export default function VideoPlayer () {
  const videoStyle = { width: 600, height: 379, borderRadius: '10px' }
  return (
          <div>
              <h1 className="mt-3 ms-2" style={{ color: 'orange' }}>Great Moments</h1>
              <video autoPlay controls style={videoStyle}>
                  <source src="/moment.mp4" type="video/mp4" />
              </video>
          </div>
  )
}
