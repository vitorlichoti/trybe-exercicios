const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDamage = 15;
  const dragonDamage = Math.floor(Math.random() * (dragon.strength - minDamage + 1) + minDamage);
  return dragonDamage;
}

const warriorAttack = (warrior) => {
  const warriorDamage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) + warrior.strength)
  return warriorDamage;
}

const mageAttack = (mage) => {
  const totalMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const mageDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);

  totalMana >= 15 ? totalMana - 15 : `Não possui mana suficiente`;

  return {
    damage: mageDamage,
    manaConsumed: totalMana,
  };
}

