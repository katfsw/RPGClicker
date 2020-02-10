
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([  
        { name:"Staff", imageurl:"https://oldschool.runescape.wiki/images/b/bb/Staff.png?d30e5", rarity:50, description:"It's a slightly magical stick.", Stab:0, Slash:-1, Crush:7, Magic:4, Range:0, Stab_Defense:2, Slash_Defense:1, Crush_Defense:4, Magic_Defense:0, Range_Defense:3, Strength:0, Ranged_Strength:0, Magic_Damage:0, Speed:5},
        {name:'Wooden Shield', imageurl:'https://oldschool.runescape.wiki/images/d/db/Wooden_shield.png?e50c1', rarity:50, description:'A solid wooden shield.', Stab:0, Slash:0, Crush:0, Magic:0, Range:0, Stab_Defense:4, Slash_Defense:5, Crush_Defense:3, Magic_Defense:1, Range_Defense:4, Strength:0, Ranged_Strength:0, Magic_Damage:0, Speed:0},
        {name:'Bronze Sword', imageurl:'https://oldschool.runescape.wiki/images/b/b8/Bronze_sword.png?2eee8', rarity:50, description:'A razor sharp sword.', Stab:4, Slash:3, Crush:-2, Magic:0, Range:0, Stab_Defense:0, Slash_Defense:2, Crush_Defense:1, Magic_Defense:0, Range_Defense:0, Strength:5, Ranged_Strength:0, Magic_Damage:0, Speed:1}
      ]);
    });
};

/*
{ name:'', imageurl:'', rarity: , description:'', Stab:, Slash:, Crush:, Magic:, Range: , Stab_Defense: , Slash_Defense: , Crush_Defense: , Magic_Defense: , Range_Defense: , Strength: , Ranged_Strength: , Magic_Damage: , Speed: },
For my Personal Use


Rarity:
- 1 : Ultra Rare
- 3 : Epic
- 7 : Super Rare
- 15 : Rare
- 25 : Un-Common
- 50 : Common
*/