export const details = [
  {
    name: 'Mud Farm',
    type: 'Creature Farm',
    upgrades: [
      {
        costs: [{ ref: 'Roots', amount: 10 }]
      }
    ]
  },
  {
    name: 'Gremlin',
    type: 'Creature',
    requirements: [{ ref: 'Mud Farm' }],
    costs: [],
    drops: [{ ref: 'Slime', amount: 3 }],
    upgrades: [
      {
        costs: [{ ref: 'Slime', amount: 5 }],
        upgrades: {
          drops: [{ ref: 'Slime', amount: 1 }]
        }
      },
      {
        costs: [{ ref: 'Hide', amount: 5 }],
        upgrades: {
          drops: [{ ref: 'Slime', amount: 1 }]
        }
      }
    ]
  },
  {
    name: 'Slime',
    type: 'Resource'
  },
  {
    name: 'Orc Mage',
    type: 'Creature',
    requirements: [{ ref: 'Mud Farm', level: 2 }],
    costs: [{ ref: 'Roots', amount: 1 }],
    drops: [{ ref: 'Cracked Orb', amount: 3 }],
    upgrades: [
      {
        costs: [{ ref: 'Hide', amount: 125 }],
        upgrades: {
          costs: [{ ref: 'Roots', amount: 1 }],
          drops: [{ ref: 'Cracked Orb', amount: 1 }]
        }
      },
      {
        costs: [
          { ref: 'Magic Tome', amount: 25 },
          { ref: 'Slime', amount: 250 }
        ],
        upgrades: {
          costs: [{ ref: 'Roots', amount: 1 }],
          drops: [
            {
              ref: 'Cracked Orb',
              amount: 1
            }
          ]
        }
      }
    ]
  },
  {
    name: 'Cracked Orb',
    type: 'Resource'
  },
  {
    name: 'Generator I',
    type: 'Generator',
    costs: [{ ref: 'Hide', amount: 5 }],
    generates: {
      type: 'spawnTime',
      amounts: [-0.04, -0.08, -0.12, -0.16, -0.2]
    }
  },
  {
    name: 'Hatchery',
    type: 'Creature Farm',
    requirements: [{ ref: 'Mud Farm' }],
    costs: [{ ref: 'Slime', amount: 15 }],
    upgrades: [
      {
        costs: [{ ref: 'Rotten Flesh', amount: 250 }]
      },
      {
        costs: [{ ref: 'Ooze', amount: 1000 }]
      }
    ]
  },
  {
    name: 'Spider',
    type: 'Creature',
    requirements: [{ ref: 'Hatchery' }],
    costs: [{ ref: 'Slime', amount: 1 }],
    drops: [{ ref: 'Hide', amount: 3 }],
    upgrades: [
      {
        costs: [{ ref: 'Slime', amount: 100 }],
        upgrades: {
          costs: [{ ref: 'Slime', amount: 1 }],
          drops: [{ ref: 'Hide', amount: 1 }]
        }
      },
      {
        costs: [
          { ref: 'Cracked Orb', amount: 15 },
          { ref: 'Roots', amount: 100 }
        ],
        upgrades: {
          costs: [{ ref: 'Slime', amount: 1 }],
          drops: [{ ref: 'Hide', amount: 1 }]
        }
      },
      {
        costs: [
          { ref: 'Wings', amount: 50 },
          { ref: 'Magic Tome', amount: 125 }
        ],
        upgrades: {
          drops: [{ ref: 'Hide', amount: 1 }]
        }
      }
    ]
  },
  {
    name: 'Hide',
    type: 'Resource'
  },
  {
    name: 'Blood Bat',
    type: 'Creature',
    requirements: [{ ref: 'Hatchery', level: 2 }],
    costs: [{ ref: 'Rotten Flesh', amount: 3 }],
    drops: [{ ref: 'Wings', amount: 3 }],
    upgrades: [
      {
        costs: [
          { ref: 'Magic Tome', amount: 100 },
          { ref: 'Hide', amount: 500 }
        ],
        upgrades: {
          costs: [{ ref: 'Rotten Flesh', amount: 1 }],
          drops: [{ ref: 'Wings', amount: 1 }]
        }
      }
    ]
  },
  {
    name: 'Idol Portal',
    requirements: [{ ref: 'Library' }]
  }
];

export default [
  // Creature Farms + Creatures + Drops + Juice
  {
    name: 'Mud Farm',
    costs: []
  },
  {
    name: 'Gremlin',
    costs: []
  },
  {
    name: 'Slime',
    costs: []
  },
  {
    name: 'Orc Mage',
    costs: [{ ref: 'Roots' }]
  },
  {
    name: 'Cracked Orb',
    costs: []
  },
  {
    name: 'Hatchery',
    costs: [{ ref: 'Slime' }]
  },
  {
    name: 'Spider',
    costs: [{ ref: 'Slime' }]
  },
  {
    name: 'Hide',
    costs: []
  },
  {
    name: 'Blood Bat',
    costs: [{ ref: 'Rotten Flesh' }]
  },
  {
    name: 'Wings',
    costs: []
  },
  {
    name: 'Crypts',
    costs: [{ ref: 'Cracked Orb' }, { ref: 'Roots' }]
  },
  {
    name: 'Zombie',
    costs: []
  },
  {
    name: 'Rotten Flesh',
    costs: []
  },
  {
    name: 'Skeleton Mage',
    costs: [{ ref: 'Bones' }]
  },
  {
    name: 'Greenhouse',
    costs: [{ ref: 'Stone Stew' }, { ref: 'Vines' }]
  },
  {
    name: 'Ent',
    costs: [{ ref: 'Fairy Dust' }, { ref: 'Roots' }]
  },
  {
    name: 'Wood',
    costs: []
  },
  // Producers
  {
    name: 'Arbitrarium',
    costs: [{ ref: 'Coin' }, { ref: 'Hide' }]
  },
  {
    name: 'Roots',
    costs: []
  },
  {
    name: 'Vines',
    costs: []
  },
  {
    name: 'Mine',
    costs: [{ ref: 'Fairy Dust' }, { ref: 'Vines' }]
  },
  {
    name: 'Stone',
    costs: []
  },
  {
    name: 'Scavenger',
    costs: [{ ref: 'Ogre Hair' }, { ref: 'Wood' }]
  },
  // Converters
  {
    name: 'Magic Workshop',
    costs: [{ ref: 'Cracked Orb' }, { ref: 'Hide' }]
  },
  {
    name: 'Magic Tome',
    costs: [{ ref: 'Cracked Orb' }, { ref: 'Hide' }]
  },
  {
    name: 'Fairy Dust',
    costs: [{ ref: 'Wings' }]
  },
  {
    name: 'Kitchen',
    costs: [{ ref: 'Mighty Hammer' }, { ref: 'Stone' }]
  },
  {
    name: 'Stone Stew',
    costs: [{ ref: 'Stone' }, { ref: 'Rotten Flesh' }]
  },
  // Generators
  {
    name: 'Generator I',
    costs: [{ ref: 'Hide' }]
  },
  // Researchers
  {
    name: 'Library',
    costs: [{ ref: 'Magic Tome' }, { ref: 'Roots' }]
  },
  {
    name: 'Archives',
    costs: [{ ref: 'Necklace' }, { ref: 'Magic Tome' }]
  },
  // Idols
  {
    name: 'Idol Portal',
    costs: [{ ref: 'Dark Energy' }, { ref: 'MagicTome' }]
  },
  // Misc
  {
    name: 'Spell Factory',
    costs: [{ ref: 'Ring' }, { ref: 'Roots' }]
  },
  {
    name: 'Skull Mortar',
    costs: [{ ref: 'Stage Number' }, { ref: 'Stone' }]
  }
];
