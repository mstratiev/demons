/*var demons = {
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
};*/
var daemons = {
    "Asmodeus": ["lust", "sex", "affair", "rape", "sexual assault"],
    "Lucifer": ["pride", "president", "minister", "prize", "sanction"],
    "Mammon": ["greed", "corruption", "bribe", "money", "award", "cash", "valuable", "rare", "sanction", "gold", "revenue", "rob", "addiction"],
    // "Beelzebub": ["gluttony", "government", "addiction"],
    "Leviathan": ["envy", "celebrity", "celebrities", "migrants", "border", "suicide"],
    "Satan": ["wrath", "massacre", "threat", "soldier", "battle", "terror", "terrified", "bomb", "attack", "assault", "kill", "alert", "war ", "nazi", "missle", "fight", "impact", "armed"]
        //,
        //"Belphegor": ["sloth"]
};

var demonsComplete = {
    'Asmodeus': ['abduct',
        'abuse',
        'abusive',
        'adultery',
        'affair',
        'aids',
        'amorous',
        'bastard',
        'bondage',
        'call girl',
        'callgirl',
        'cheat',
        'desecrat',
        'erotic',
        'fetish',
        'harass',
        'harem',
        'incest',
        ' lust',
        'masochi',
        'masturbat',
        'nudi',
        'nymphomania',
        'obsess',
        'orgasm',
        'porn',
        'rape',
        ' sex',
        'sexual assault ',
        'unfaithful',
        'voyeur'
    ],
    'Belphegor': ['abandon',
        'abort',
        'absent',
        'bastard',
        'bored',
        'boredom',
        'boring',
        'caprice',
        'capricious',
        'cheat',
        'counterproductive',
        'cynic',
        'degenerat',
        'degrading',
        'depress',
        'landfill',
        'lazily',
        'laziness',
        'lazy',
        'mechaniz',
        'neglect',
        'nudi',
        'procrastinat',
        'slack',
        'slacker',
        'sloth',
        'stoic',
        'unemploy'
    ],
    'Mammon': [' lie ',
        ' lied ',
        ' loot',
        ' occup',
        ' sham ',
        'addicition',
        'addict',
        'annexation',
        'apartheid',
        'award',
        'bandit',
        'bank ',
        'banker',
        'banking',
        'booty',
        'bourgeois',
        'break-in',
        'bribe',
        'bribe',
        'cartel',
        'cash',
        'cash ',
        'casino',
        'cheat',
        'colonialism',
        'colonization',
        'communism',
        'communist',
        'conflict',
        'conflict of interest',
        'contraband',
        'corporation',
        'corrupt',
        'corruption',
        'corruption',
        'credit',
        'credit card',
        'czar',
        'dazzl',
        'deceit',
        'decept',
        'denomination',
        'dependenc',
        'despot',
        'diamond',
        'dictator',
        'dishonest',
        'dominat',
        'egoism',
        'egoist',
        'elitism',
        'elitist',
        'embargo',
        'embezzl',
        'empire',
        'federalism',
        'feudal',
        'financ',
        'foist',
        'franchise',
        'fraud',
        'gamble',
        'glamour',
        'gold',
        'gold digger',
        'greed',
        'heist',
        'illegal',
        'jewelry',
        'kleptomaniac',
        'materialis',
        'money',
        'propaganda',
        'rare',
        'revenue',
        'rich',
        'riches',
        'sanction',
        'scam',
        'selfish',
        'socialis',
        'steal',
        'totalitarian',
        'ungrateful',
        'valuable'
    ],
    'Lucifer': ['abolish',
        'abolition',
        'accuse',
        'afraid',
        'alien',
        'angst',
        'annoy',
        'anti-Semitic',
        'anti-Semitism',
        'anxiety',
        'anxious',
        'apartheid',
        'apathetic',
        'apathy',
        'arbiter',
        'arbitr',
        'argue',
        'argument',
        'ashamed',
        'asylum',
        'averse',
        'barbaric',
        'belittle',
        'blasphem',
        'bullfight',
        'capitulate',
        'censorship',
        'champion',
        'charisma',
        'chauvinism',
        'chauvinist',
        'colonialism',
        'colonization',
        'commandeer',
        'condescend',
        'conflict',
        'conservatism',
        'conservative',
        'contraband',
        'contradict',
        'coronation',
        'cynic',
        'czar',
        'dependenc',
        'despot',
        'dictator',
        'discredit',
        'disgrace',
        'disgust',
        'disillusion',
        'displeas',
        'distrust',
        'dominat',
        'effusive',
        'egotism',
        'egotist',
        'elitism',
        'elitist',
        'empire',
        'extradit',
        'fascism',
        'fascist',
        'fashion',
        'glamour',
        'glorify',
        'guilt',
        'harass',
        'infidel',
        'minister',
        'monarch',
        'narcissis',
        'nationalis',
        'president',
        'pride',
        'prize',
        'racial',
        'sanction',
        'self-absorbed',
        'self-centered',
        'show-off',
        'snob',
        'ultimatum',
        'ungrateful',
        'worship'
    ],
    'Beelzebub': ['addict',
        'addiction',
        'alcohol',
        'anorexia',
        'anorexic',
        'booze',
        'bourgeois',
        'brew',
        'bribe',
        'cannibal',
        'caprice',
        'capricious',
        'caviar',
        'cigarette',
        'cocaine',
        'consume',
        'consuming',
        'consummat',
        'consumption',
        'corporation',
        'corrupt',
        'corruption',
        'degenerat',
        'degrading',
        'displeas',
        'eccentric',
        'ecstasy',
        'fashion',
        'gluttony ',
        'government',
        'hedonism',
        'heroin ',
        'intoxicat',
        'landfill',
        'narcotic',
        'obes',
        'opium',
        'overeat',
        'plastic surgery',
        'psychedelic',
        'self-indulgen',
        'selfish'
    ],
    'Leviathan': ['accuse',
        'alien',
        'amoral',
        'antipathy',
        'apartheid',
        'argue',
        'argument',
        'assassin',
        'belittle',
        'blasphem',
        'border',
        'bourgeois',
        'cctv',
        'celebrities',
        'celebrity',
        'censorship',
        'classified',
        'communism',
        'communist',
        'compulsory',
        'condemn',
        'conspiracy',
        'conspirator',
        'critici',
        'deceit',
        'delude',
        'desecrat',
        'discredit',
        'disfigure',
        'disintegrate',
        'egalitarian',
        'embargo',
        'envy',
        'foist',
        'forbid',
        'foreigner',
        'hate ',
        'hateful',
        'hypocrisy',
        'hypocrit',
        'jealous',
        'loathe',
        'migrants',
        'misogyn',
        'murder',
        'racial',
        'racis',
        'rumor',
        'sabotage',
        'sexism',
        'skinhead',
        'suicide',
        'vandal'
    ],
    'Satan': ['H-bomb',
        'abuse',
        'abusive',
        'agitate',
        'agony',
        'airfare',
        'alert',
        'ambush',
        'anarch',
        'anger ',
        'angrily',
        'angry',
        'anguish',
        'annihilat',
        'apocalypse',
        'apocalyptic',
        'armed',
        'arsenal',
        'assassin',
        'assault',
        'attack',
        'ballistic',
        'barbaric',
        'barricade',
        'bashful',
        'bashing',
        'battle',
        'battlefield',
        'battleground',
        'battleship',
        'blood',
        'bomb',
        'bombardment',
        'bombshell',
        'brutal',
        'bullet',
        'carnage',
        'cataclysm',
        'catastroph',
        'cease-fire',
        'chaos',
        'chaotic',
        'civil war',
        'collapse',
        'concentration camp',
        'confrontation',
        'corporal punishment',
        'corpse',
        'crisis',
        'cutthroat',
        'damage',
        'death',
        'death penalty',
        'demolish',
        'demolition',
        'destroy',
        'destructive',
        'detonate',
        'disfigure',
        'disintegrate',
        'dismantle',
        'disrupt',
        'electric chair',
        'euthanasia',
        'extradit',
        'extremism',
        'extremist',
        'fanatic',
        'fascism',
        'fascist',
        'fatality',
        'fear ',
        'fight',
        'fight',
        'forceful',
        'guillotine',
        'homicid',
        'impact',
        'isis',
        'kill',
        'massacre',
        'massacre',
        'misogyn',
        'missle',
        'molest',
        'murder',
        'mutilate',
        'napalm',
        'nazi',
        'psychopath',
        'rebel',
        'sadism',
        'savage',
        'self-destructive',
        'skinhead',
        'soldier',
        'terrif',
        'terror',
        'threat',
        'tyran',
        'vandal',
        'victim',
        'war',
        'war crim',
        'wrath'
    ]
};

module.exports = demonsComplete;
