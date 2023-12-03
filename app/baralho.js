console.log('hello world');

const suits=['♥','♦','♣','♠'];
const values=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const descricao=[
    'Escolha 1 jogador para beber',
    'Escolha 2 jogadores para beber',
    'Escolha 3 jogadores para beber',
    '2 verdades e 1 mentira, se acertarem a mentira você bebe ou elas bebem',
    'Era uma vez...',
    'Eu nunca ..., quem já fez bebe',
    'Amigo de bebida, toda vez que você for beber seu amigo bebe',
    'Mais novo bebe',
    'Mais velho bebe',
    'Pessoa com o copo mais cheio bebe',
    'Você bebe',
    'Todas mulheres bebem',
    'Todos homens bebem'
]

function getDeck()
{
	let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {Value: values[x], Suit: suits[i], Descricao: descricao[x]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function dealCard(deck){
    return deck.pop();
}




