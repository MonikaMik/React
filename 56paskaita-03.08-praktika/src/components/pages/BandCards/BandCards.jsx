import BandCard from '../../UI/BandCard/BandCard';
import EditBandForm from '../../UI/BandCard/EditBandForm';
import { useContext, useRef } from 'react';
import BandContext from '../../../contexts/BandContext';
import { EditFormContextProvider } from '../../../contexts/EditFormContext';
import SkeletonCard from '../../UI/BandCard/SkeletonCard';

const BandCards = () => {
	const { bands } = useContext(BandContext);

	const editDialogRef = useRef(null);

	const showForm = () => {
		editDialogRef.current.showModal();
	};

	const hideForm = () => {
		editDialogRef.current.close();
	};

	return (
		<EditFormContextProvider>
			<section className='bandCardContainer'>
				{bands.length ? (
					<>
						{bands.map(band => (
							<BandCard key={band.id} band={band} showForm={showForm} />
						))}
						<dialog ref={editDialogRef}>
							<EditBandForm hideForm={hideForm} />
						</dialog>
					</>
				) : (
					[...Array(6)].map((_, index) => <SkeletonCard key={index} />)
				)}
			</section>
		</EditFormContextProvider>
	);
};

export default BandCards;
