import styled from 'styled-components';

const Skeleton = styled.div`
	background-color: var(--card-color);
	width: 300px;
	height: 400px;
`;

const SkeletonCard = () => {
	return <Skeleton />;
};
export default SkeletonCard;
