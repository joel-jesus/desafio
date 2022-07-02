import micro from 'micro-cors'

function MyApi(req, res) {
  res.status(200).json({
    items: [
      {
        id: 1,
        name: 'Camisetas',
        path: 'camisetas'
      },
      {
        id: 2,
        name: 'Calças',
        path: 'calcas'
      },
      {
        id: 3,
        name: 'Calçados',
        path: 'calcados'
      }
    ]
  })
}

const cors = micro()

export default cors(MyApi)
