
function writeCards(friendsArray, event) {
  let thankYouCards = []
  for ( let i = 0; i < friendsArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${friendsArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

