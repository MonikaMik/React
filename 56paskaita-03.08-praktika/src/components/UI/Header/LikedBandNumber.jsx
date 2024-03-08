import BandContext from '../../../contexts/BandContext';
import { useContext } from 'react';

const LikedBandNumber = () => {
	const { bands } = useContext(BandContext);
	return (
		<p>
			FAVORITE BANDS:{' '}
			<span className='yellow'>{bands.filter(band => band.liked).length}</span>
		</p>
	);
};
export default LikedBandNumber;
