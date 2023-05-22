const games = require('../controllers/gamesController')
const mockRequest = (body = {}) => ({ body })
const mockResponse = () => {
  const res = {}
  res.json = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  return res
}

describe('index function', () => {
  test('res.json called with some correct response',
    (done) => {
      const req = mockRequest()
      const res = mockResponse()

      games.index(req, res)
      expect(res.status).toBeCalledWith(200)
      expect(res.json).toBeCalledWith({
        status: true,
        message: 'index'
      })

      done()
    })
})

describe('bio function', () => {
  test('res.json called with some correct response',
    (done) => {
      const req = mockRequest({ name: 'Agung' })
      const res = mockResponse()

      games.bio(req, res)
      expect(res.status).toBeCalledWith(200)
      expect(res.json).toBeCalledWith({
        status: true,
        message: 'called name',
        data: { name: req.body.name }
      })

      done()
    })
})
