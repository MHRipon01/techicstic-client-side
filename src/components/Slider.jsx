import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
const Slider = ({product}) => {
    // console.log(product[7].photo);
    // const image1 = product[7].photo
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
  

//   console.log(images[0]);

  const slideStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '350px',
  };

  const spanStyle = {
    padding: '20px',
    fontSize: '20px',
    background: '#efefef',
    textAlign: 'center',
  };

  return (
    <Slide>
      <div className="each-slide-effect h-full" style={slideStyle}>
        <div  className="bg-[url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')]">
          <span style={spanStyle}>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect" style={slideStyle}>
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span style={spanStyle}>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect" style={slideStyle}>
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span style={spanStyle}>Slide 3</span>
        </div>
      </div>
    </Slide>
  );
};

export default Slider;