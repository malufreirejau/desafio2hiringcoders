import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

interface BProduct{
    id: number;
    name: string;
    photo: string;
    description: string;
    price: string;
}

const Home: React.FC = () => {
    const [ data, setData ] = useState<BProduct[]>([]);
    useEffect(() =>{
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {

        const productStorage = JSON.stringify( data[index]);

        localStorage.setItem(`@produto-${index}`, productStorage)        
    }

    return(
        <Container>
            <header>
                <div className="box">
                    <img src="https://catracalivre.com.br/wp-content/uploads/sites/8/2015/11/Emp%C3%B3rio-da-Cerveja-Facebook-Divulga%C3%A7%C3%A3o.jpg" alt="beer" width="400" height="auto"/>
                    <img src="https://catracalivre.com.br/wp-content/uploads/sites/8/2015/11/Emp%C3%B3rio-da-Cerveja-Facebook-Divulga%C3%A7%C3%A3o.jpg" alt="beer" width="400" height="auto"/>
                    <img src="https://catracalivre.com.br/wp-content/uploads/sites/8/2015/11/Emp%C3%B3rio-da-Cerveja-Facebook-Divulga%C3%A7%C3%A3o.jpg" alt="beer" width="400" height="auto"/>
                </div>
            </header>
            <section>
                { data.map( (prod, index) => (
                    <div className="product-content" key={prod.id}>
                    <img src={prod.photo} alt="Cacilds ampolis" width="200" height="auto" />
                    <h4>{prod.name}</h4>
                    <span>{prod.description}</span>
                    <h6>{prod.price}</h6>
                    <button onClick={ () => handleCart(index)}>Adicionar ao carrinho</button>
                </div>
                ))}
                
            </section>
            {/* <section>
                <div className="cadastro">
                Cadastre-se e não fique de fora dessa
                </div>
                <div id="content">
                     <form id="form">
                        <input type="text" placeholder="name" id="nome" />
                        <input type="text" placeholder="email" id="email" />
                        <input type="submit" placeholder="Cadastrar"/>
                     </form>
                </div>


            </section>
                
                    

            
             */}
        </Container>
    );
}

export default Home;