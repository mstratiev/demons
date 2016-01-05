var demons = {
    'Asmodeus': 'lust',
    'Lucifer': 'pride',
    'Mammon': 'greed',
    'Leviathan': 'envy',
    'Beelzebub': 'gluttony',
    'Satan': 'wrath',
    'Belphegor': 'sloth'
};

var keywords = {
    "lust": ["sex", "affair"],
    "pride": ["president", "minister", "prize", "sanction"],
    "greed": ["corruption", "bribe", "money", "award", "cash", "valuable", "rare", "sanction", "gold", "revenue", "rob"],
    "gluttony": ["government"],
    "envy": ["celebrity", "celebrities", "migrants", "sanction"],
    "wrath": ["bomb", "attack", "kill", "alert", "war ", "nazi", "missle", "fight", "impact", "armed"],
    "sloth": []
};
var daemons = {
    "Asmodeus": ["lust", "sex", "affair"],
    "Lucifer": ["pride", "president", "minister", "prize", "sanction"],
    "Mammon": ["greed", "corruption", "bribe", "money", "award", "cash", "valuable", "rare", "sanction", "gold", "revenue", "rob"],
    "Beelzebub": ["gluttony", "government"],
    "Leviathan": ["envy", "celebrity", "celebrities", "migrants"],
    "Satan": ["wrath", "threat", "soldier", "battle", "terror", "terrified", "bomb", "attack", "kill", "alert", "war ", "nazi", "missle", "fight", "impact", "armed"],
    "Belphegor": ["sloth"]
};

module.exports = daemons;
