import React from 'react';
import { JSONDataResponse } from '../../instance/instance';
import { CardItemStyled } from './styles';

interface CardItemProps extends JSONDataResponse {
  toggleModal: Function;
}

const CardItem:React.FC<CardItemProps> = ({ id, title, thumbnailUrl, toggleModal }: CardItemProps) => {

  return (
    <CardItemStyled className="card-item" key={id} onClick={() => toggleModal({ elType: "li", elId: id })}>
      <img src={thumbnailUrl} alt={title} />
    </CardItemStyled>
  );
}

export default CardItem;
