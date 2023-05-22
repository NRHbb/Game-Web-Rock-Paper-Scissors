module.exports = {
  index: (req, res) => {
    res.status(200).json({
      status: true,
      message: 'Hello world'
    })
  },
  sum: (req, res) => {
    const { x, y } = req.body
    res.status(200).json({
      status: true,
      message: 'Parameters summarized!',
      data: {
        x, y, result: x + y
      }
    })
  },
  devide: (req, res) => {
    const { x, y } = req.body

    res.status(200).json({
      status: true,
      message: 'Devide two numbers',
      data: { x, y, result: x - y }
    })
  },
  user: (req, res) => {
    const { id, nama } = req.body
    res.status(200).json({
      status: true,
      message: 'data user',
      data: {
        id: 1,
        nama: 'agung'
      }
    })
  }
}
