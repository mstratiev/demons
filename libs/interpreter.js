'use strict'

var _ = require('lodash');

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
	"lust": ["sex"],
	"pride": ["president", "minister", "prize"],
	"greed": ["corruption", "bribe", "money", "award"],
	"gluttony":[],
	"envy": [],
	"wrath": ["bomb", "attack", "kill", "alert", "war"],
	"sloth":[]
};

class Interpreter {
    constructor() {
        this.keywords = keywords;
    }

    interprete(feed) {


    }

    sort(news){

    }
}


module.exports = new Interpreter();
