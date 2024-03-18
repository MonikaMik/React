import styled from 'styled-components';

const StyledHome = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-top: 50px;
	justify-items: center;
	align-items: center;
	gap: 5%;
	> h1 {
		grid-area: 1 / 1 / 2 / -1;
		font-size: 3rem;
	}
	> img {
		place-self: center end;
	}
	> p {
		line-height: 1.5;
		font-size: 2rem;
		width: 20ch;
		place-self: center start;
	}
`;

const Home = () => {
	return (
		<StyledHome>
			<h1>Home</h1>
			<img
				src='https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png'
				alt='cat'
			/>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam saepe
				et velit dolorum, sed, dignissimos eveniet exercitationem laboriosam
				iure
			</p>
		</StyledHome>
	);
};
export default Home;
