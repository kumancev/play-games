import { Carousel } from 'antd'
import { Screenshot } from '@src/types/game'

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: '100%',
  height: 'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

type CarouselElProps = {
  images: Array<Screenshot>
}

const CarouselEl = ({ images }: CarouselElProps) => {
  return (
    <Carousel autoplay>
      {images.map((image) => (
        <div key={image.id}>
          <img style={contentStyle} src={image.image} alt='screenshot' />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselEl
