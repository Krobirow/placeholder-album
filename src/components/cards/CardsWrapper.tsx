import React, { useCallback, useState } from 'react';
import { initDataOfOneItemCard, JSONDataResponse } from '../../instance/instance';
import { CardStyled } from './styles';

import Modal from '../modal/Modal';
import CardItem from './CardItem';
import ModalInner from '../modal/ModalInner';

type CardsWrapperProps = {
  photosData: Array<JSONDataResponse>
}

type PhotoObjFromToggle = {
	elType: string
	elId?: number
	data?: JSONDataResponse
}

const CardsWrapper:React.FC<CardsWrapperProps> = ({ photosData }: CardsWrapperProps) => {
	const [ showedModal, toggleShowedModal ] = useState(false)
	const [ dataForModal, setDataForModal ] = useState<JSONDataResponse>(initDataOfOneItemCard)

	const toggleModal = useCallback((photoObj: PhotoObjFromToggle) => {
		if (showedModal) return toggleShowedModal(!showedModal);
		else {
			toggleShowedModal(true);

			if (photoObj.elId) {
				const onePhotoData = photosData.filter(el => el.id === photoObj.elId);
				setDataForModal(onePhotoData.length >= 1 ? onePhotoData[0] : initDataOfOneItemCard);
			}
			else setDataForModal(initDataOfOneItemCard)
		}

	}, [ showedModal, photosData ])

  return (
		<main>
			<CardStyled>
				{
					photosData.map((el: JSONDataResponse) => {
						return <CardItem {...el} key={el.id} toggleModal={toggleModal}/>
					})
				}
			</CardStyled>
			{showedModal && <Modal>
				<ModalInner data={dataForModal} toggleModal={toggleModal} />
			</Modal>}
		</main>
	)
}

export default CardsWrapper
