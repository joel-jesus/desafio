import micro from 'micro-cors'

function MyApi(req, res) {
  res.status(200).json({
    filters: [
      {
        gender: 'Gênero'
      }
    ],
    items: [
      {
        id: 10,
        sku: 'sku-10',
        path: 'calca-social',
        name: 'Calça Social',
        image: 'media/pants-1.jpg',
        price: 39.9,
        specialPrice: 29.9,
        filter: [
          {
            gender: 'Masculina'
          }
        ]
      },
      {
        id: 11,
        sku: 'sku-11',
        path: 'calca-feminina',
        name: 'Calça Feminina',
        image: 'media/pants-2.jpg',
        price: 24.15,
        filter: [
          {
            gender: 'Feminina'
          }
        ]
      },
      {
        id: 12,
        sku: 'sku-12',
        path: 'calca-la-feminina',
        name: 'Calça de Lã Feminina',
        image: 'media/pants-3.jpg',
        price: 61.49,
        filter: [
          {
            gender: 'Feminina'
          }
        ]
      },
      {
        id: 13,
        sku: 'sku-13',
        path: 'calca-caminhada-masculina',
        name: 'Calça Caminhada Masculina',
        image: 'media/pants-4.jpg',
        price: 70.0,
        specialPrice: 58,
        filter: [
          {
            gender: 'Masculina'
          }
        ]
      },
      {
        id: 14,
        sku: 'sku-14',
        path: 'calca-caminhada-feminina',
        name: 'Calça Caminhada Feminina',
        image: 'media/pants-5.jpg',
        price: 70.0,
        filter: [
          {
            gender: 'Feminina'
          }
        ]
      }
    ]
  })
}

const cors = micro()

export default cors(MyApi)
