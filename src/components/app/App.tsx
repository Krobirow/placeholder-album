import React from 'react';
import { ContainerStyled } from './styles'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CardsWrapper from '../cards/CardsWrapper';

import { useAsyncData } from '../hooks/useAsyncData';

import { ReactComponent as LoadingSpinner } from '../../assets/infinite-spinner.svg';

/* Napisz prostą aplikacje która wyświetli listę zdjęć wraz z opisami oraz po kliknięciu w pojedyńczy obrazek wyswietli jego detale.
  Wykorzystaj do tego ten endpoint:
    https://jsonplaceholder.typicode.com/albums/1/photos
  Na stronie https://jsonplaceholder.typicode.com/ znajduje się dokumentacja jak używać tego api.
*/

const App:React.FC = (props: {}) => {
  const { photosData, photosDataIsLoading, responseError } = useAsyncData();

  return (
    <ContainerStyled>
      <Header />
      {responseError && <div> {responseError?.toString?.()} </div>}
      {!responseError && photosDataIsLoading && <LoadingSpinner />}
      {!photosDataIsLoading && !responseError && <CardsWrapper photosData={photosData} /> }
      <Footer />
      <div id="modal-root"></div>
    </ContainerStyled>
  );
}

export default App;
