import './style.css'
import Carousel from 'react-elastic-carousel'
import Item from './Item'

const breakPoints = [
    { width:1, itemsToShow: 1 },
    { width:550, itemsToShow: 2 },
    { width:768, itemsToShow: 3 },
    { width:1200, itemsToShow: 4 },
]

const Component3 = () => {
    return (
     <div className='Carrousel'>
        <Carousel breakPoints={breakPoints}>
            <Item cargo='1' testimonio='yy' nome='zz' />
            <Item cargo='2' testimonio='yy' nome='zz' />
            <Item cargo='3' testimonio='yy' nome='zz' />
            <Item cargo='4' testimonio='yy' nome='zz' />
            <Item cargo='5' testimonio='yy' nome='zz' />
        </Carousel>
     </div>
    );

}

export default Component3
