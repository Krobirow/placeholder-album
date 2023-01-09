import React from "react";

import { JSONDataResponse } from '../../instance/instance';
import { BackgroundStd, CloseButtonStd, ModalContentStd, ModalWrapperStd, FigureStd, FigcaptionStd } from "./styles";

interface ModalProps {
	data : JSONDataResponse;
	toggleModal: Function;
}

const ModalInner:React.FC<ModalProps> = ({ data: { albumId, id, title, url }, toggleModal}: ModalProps) => {
  return (
    <ModalWrapperStd className="modal">
			<ModalContentStd>
				<CloseButtonStd onClick={() => toggleModal({ elType: "modal" })}>&times;</CloseButtonStd>
				<p>AlbumID : {albumId}</p>
				<p>ItemID : {id}</p>
				<FigureStd>
					<img src={url} alt={title} />
					<FigcaptionStd>{title}</FigcaptionStd>
				</FigureStd>

			</ModalContentStd>
			<BackgroundStd onClick={() => toggleModal({ elType: "modal" })} />
    </ModalWrapperStd>
  );
}

export default ModalInner