import React from 'react';
import CardAdd from './Card';
import { useStateValue } from '../../StateProvider';
import './../css/Descripcion.css'

const DescripcionProducto = ({product:{id,name,productType,image,price,rating,description}}) => {
    const [{producto}, dispatch] = useStateValue();
  return (
      
      < >
       {producto?.map((item)=>(
          <div key={item.id} product={item}> 
      
            <div className='grid-container'>
            <div className='container'>
              <img src={image} className='imagen'></img>  
              <div className='container-header'>
                  <h1>{name}</h1> 
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p>&#11088;</p>
                  ))}
              </div>
                
              </div>
              <CardAdd className='card'/>
            </div>
            <div className='container-main'>
              <h3>Descripción</h3>
              <p>
                {description}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
        </div>
      ))}
      </>
      
       
    )
}

export default DescripcionProducto

