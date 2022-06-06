function handleClick (value, type) {
  if (type === 'light') {
    if (value === 1) {
      alert(`Votre plante a besoin d'un peu de soleil`)
    }
    if (value === 2) {
      alert(`Cette plante requiert de soleil`)
    }
    if (value === 3) {
      alert(`Votre plante a besoin de beaucoup de soleil`)
    }
  } else {
    if (value === 1) {
      alert(`Votre plante a besoin d'un peu d'eau`)
    }
    if (value === 2) {
      alert(`Cette plante requiert d'eau`)
    }
    if (value === 3) {
      alert(`Votre plante a besoin de beaucoup d'eau`)
    }
  }
 //Le code est bon mais trop long et pas opti
  //     if (type === 'light' && value === 1) {
  //     alert(`Votre plante a besoin d'un peu de soleil`)
  //   }
  //   if (type === 'light' && value === 2) {
  //     alert(`Cette plante requiert de soleil`)
  //   }
  //   if (type === 'light' && value === 3) {
  //     alert(`Votre plante a besoin de beaucoup de soleil`)
  //   } else if(type !== 'light ' && value === 1){
  //     alert(`Cette plante requiert un peu d'eau`)
  //   } else if(type !== 'light ' && value === 2){
  //     alert(`Votre plante a besoin d'eau`)
  //   }else if(type !== 'light ' && value === 3){
  //     alert(`Votre plante a besoin de beaucoup d'eau`)
  //   }
  //   console.log(handleClick)
}

function CareScale ({ scaleValue, careType }) {
  const range = [1, 2, 3]

  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
    <div onClick={() => handleClick(scaleValue, careType)}>
      {range.map(rangeElem =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  )
}

export default CareScale
