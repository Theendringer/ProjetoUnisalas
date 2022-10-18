import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import bannerfies from '../public/fotos/bannerfies.png';
import bannernoticia from '../public/fotos/bannernoticia.jpg';
import bannersite01 from '../public/fotos/bannersite01.jpg';

function UncontrolledExample() {
  return (
    <div class="container">
    <Carousel>
      <Carousel.Item>
        <Image src={bannerfies} className="d-block w100"/>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={bannernoticia} className="d-block w100"/>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={bannersite01} className="d-block w100"/>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;