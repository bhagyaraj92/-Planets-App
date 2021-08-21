import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {PlanetSliderContainer, MainHeading} from './styledComponents'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <>
      <PlanetSliderContainer data-testid="planets">
        <MainHeading>PLANETS</MainHeading>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetDetails={each} />
          ))}
        </Slider>
      </PlanetSliderContainer>
    </>
  )
}

export default PlanetSlider
