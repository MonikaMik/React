import BandCard from './BandCard';
import EditBandForm from './EditBandForm';
import { useRef } from 'react';

const BandCards = ({
	bands,
	changeStatus,
	deleteBand,
	editFormInputs,
	setEditFormInputs,
	editBand
}) => {
	const editDialogRef = useRef(null);

	const showForm = () => {
		editDialogRef.current.showModal();
	};

	const hideForm = () => {
		editDialogRef.current.close();
	};

	return (
		<section className='bandCardContainer'>
			{bands.map(band => (
				<BandCard
					key={band.id}
					band={band}
					changeStatus={changeStatus}
					deleteBand={deleteBand}
					// editBand={createEditForm}
					showForm={showForm}
				/>
			))}
			<dialog ref={editDialogRef}>
				<EditBandForm
					editFormInputs={editFormInputs}
					setEditFormInputs={setEditFormInputs}
					editBand={editBand}
					hideForm={hideForm}
				/>
			</dialog>
		</section>
	);
};

export default BandCards;
