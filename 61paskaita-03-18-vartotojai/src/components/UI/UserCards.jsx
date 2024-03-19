import styled from 'styled-components';
import UsersContext from '../../contexts/UsersContext';
import { useContext } from 'react';

const StyledCard = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	border: 3px solid salmon;
	margin-bottom: 1rem;
	padding: 1rem;
`;

const UsersCards = ({ user }) => {
	const { removeUser, setUserRole } = useContext(UsersContext);
	return (
		<StyledCard>
			<h3>{user.username}</h3>

			{user.role === 'admin' ? (
				<button onClick={() => setUserRole(user.id, 'user')}>
					Remove admin
				</button>
			) : (
				<button onClick={() => setUserRole(user.id, 'admin')}>
					Make admin
				</button>
			)}

			<button onClick={() => removeUser(user.id)}>Delete user</button>
		</StyledCard>
	);
};
export default UsersCards;
