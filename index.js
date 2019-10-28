
function writeCards(friends, event){
  let thankYouCards = [];
  for(let i = 0; i < friends.length; i++){
    thankYouCards.push(`Thank you,${friends[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}