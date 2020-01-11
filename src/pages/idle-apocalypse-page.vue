<template>
  <div>
    Idle Apocalypse
    <div class="resource-viewer">
      <div class="resource-viewer-costs">
        <button
          type="button"
          class="resource-viewer-cost"
          v-for="cost in costs"
          v-bind:key="cost.name"
          v-on:click="assign(cost)"
        >
          {{ cost.name }}
        </button>
      </div>
      <div class="resource-viewer-resources">
        <button
          type="button"
          class="resource-viewer-resource"
          v-for="resource in resources"
          v-bind:key="resource.name"
          v-on:click="assign(resource)"
        >
          {{ resource.name }}
          <span v-if="resource == currentResource">(current)</span>
        </button>
      </div>
      <div class="resource-viewer-produces">
        <button
          type="button"
          class="resource-viewer-produce"
          v-for="produce in produces"
          v-bind:key="produce.name"
          v-on:click="assign(produce)"
        >
          {{ produce.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// const data = `
// Gremlin
// Slime        Gremlin
// Orc Mage
// Cracked Orb  Orc Mage
// `.trim();

const db = {};
db.resources = [];

class Resource {
  constructor(name, attributes) {
    attributes = attributes || {};

    this.name = name;
    this.costs = attributes.costs || [];
  }

  get produces() {
    return db.resources.filter(resource => {
      return resource.costs.indexOf(this) !== -1;
    });
  }
}

// Mud Farm
const gremlin = new Resource('Gremlin');
const slime = new Resource('Slime', { costs: [gremlin] });
db.resources.push(gremlin);
db.resources.push(slime);

const orcMage = new Resource('Orc Mage');
const crackedOrb = new Resource('Cracked Orb', { costs: [orcMage] });
db.resources.push(orcMage);
db.resources.push(crackedOrb);

// Hatchery
const spider = new Resource('Spider', { costs: [slime] });
const hide = new Resource('Hide', { costs: [spider] });
db.resources.push(spider);
db.resources.push(hide);

// Arbitrarium
const roots = new Resource('Roots');
db.resources.push(roots);

const vines = new Resource('Vines');
db.resources.push(vines);

const boneWood = new Resource('Bone Wood');
db.resources.push(boneWood);

const poisonIvy = new Resource('Poison Ivy');
db.resources.push(poisonIvy);

// Scavenger
const bolt = new Resource('Bolt');
db.resources.push(bolt);

// Magic Workshop
const magicTome = new Resource('Magic Tome', { costs: [crackedOrb, hide] });
db.resources.push(magicTome);

/*
class Generic {
}

class Cost {
  generic_id: String,
  amount: Number
}

class Resource < Generic {
  survivesApocalypse: Boolean
}

class Floor {
  id: String,
  costs: Array(<Cost>),
  limit: Number
}

function cost(id, amount) {
  return { id, amount };
}

function resource(id, description, costs) {
  return { id
}

const mudFarm = new Floor(
  'Mud Farm',
  'Grow goblins here, your brutish green-skinned foot soldiers.',
  costs: [],
  limit: 2,
  produces: ['Goblin']
);

db.floors = [
  mudFarm
];

const slime = new Resource(
  'Slime',
  'Gremlin gunk! Dropped by Gremlins at the Mud Farm'
);

db.resources = [
  slime
];

const goblin = new Monster(
  'Goblin',
  damage: 95,
  health: 3,
  darkEnergy: 185,
  resource: slime,
  resourceAmount: 5,
  upgrades: [
    {
      damageBonus: 150,
      darkEnergyBonus: 300,
      resourceAmountBonus: 1,
      costs: [
        new Cost(slime, 5)
      ]
    }
  ],
  skins: [
    new Skin(
      'Gremlin'
    ),
    new Skin(
      'Leprechaun',
    ),
    new Skin(
      'Teddy'
    )
  ]
);

db.monsters = [
  goblin
];
*/

export default {
  name: 'idle-apocalypse',
  data: function() {
    return {
      currentResource: db.resources[0],
      db: db
    };
  },
  computed: {
    costs: function() {
      return this.currentResource.costs;
    },
    produces: function() {
      return this.currentResource.produces;
    },
    resources: function() {
      return db.resources.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
  },
  methods: {
    assign(resource) {
      this.currentResource = resource;
    }
  }
};
</script>

<style lang="scss">
@import '../stylesheets/application/config';

.resource-viewer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
}

.resource-viewer-costs,
.resource-viewer-resources,
.resource-viewer-produces {
  display: flex;
  flex: 1 1 33%;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;

  padding: 2rem;

  text-align: center;
}

.resource-viewer-costs {
}

.resource-viewer-resources {
  flex-basis: 34%;
}

.resource-viewer-produces {
}
</style>
