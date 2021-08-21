import {
  PlanetItemContainer,
  PlanetImage,
  PlanetName,
  PlanetDescription,
} from './styledComponents'

const PlantItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails

  return (
    <>
      <PlanetItemContainer>
        <PlanetImage src={imageUrl} alt={`planet ${name}`} />
        <PlanetName>{name}</PlanetName>
        <PlanetDescription>{description}</PlanetDescription>
      </PlanetItemContainer>
    </>
  )
}
export default PlantItem
