import CareScale from "./CareScale"


  function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

function PlantItem ({name, id, light, water, cover}) {

 
  return (
    <ul>
      <li onClick={()=>handleClick(name) }>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
        <p>{name}</p>
        <p>{id}</p>


      </li>
    </ul>
  )
}

export default PlantItem;
