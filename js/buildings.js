var buildings = [
  // 1
  {
    name: 'Корпус 1',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          false,
          true,
          true,
          true,
          false,
          true
        ]
      },
      {
        floor_plan: '2etaj_korpus1_and1etaj_korpus2',
        flats: [
          false,
          true,
          false,
          false,
          false,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 2
  {
    name: 'Корпус 2',
    floors: [
      {
        floor_plan: '2etaj_korpus1_and1etaj_korpus2',
        flats: [
          false,
          true,
          false,
          false,
          false,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          true,
          true,
          true,
          false,
          true,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          true,
          false,
          false,
          true,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 3
  {
    name: 'Корпус 5',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 4
  {
    name: 'Дом 28 (построен)',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          true,
          true,
          true,
          true,
          false,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          true,
          true,
          false,
          false,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 5
  {
    name: 'Дом 30 (построен)',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          true,
          true,
          true,
          false,
          true,
          true
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 6
  {
    name: 'Корпус 4 подъезд 1',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 7
  {
    name: 'Корпус 4 подъезд 2',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 8
  {
    name: 'Корпус 5 подъезд 1',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 9
  {
    name: 'Корпус 5 подъезд 2',
    floors: [
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'default',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  // 10
  {
    name: 'Корпус 6',
    floors: [
      {
        floor_plan: 'square_house',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'square_house',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'square_house',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      },
      {
        floor_plan: 'square_house',
        flats: [
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  }
];
