import UsersContext from '../../contexts/UsersContext';
import { useContext } from 'react';
import styled from 'styled-components';
import UserCards from '../UI/UserCards';

const StyledSection = styled.section`
	> h1 {
		text-align: center;
	}
`;
const AdminPanel = () => {
	const { users } = useContext(UsersContext);
	return (
		<StyledSection>
			<h1>Admin Panel</h1>
			<div>
				{users.map(user => (
					<UserCards key={user.id} user={user} />
				))}
			</div>
		</StyledSection>
	);
};
export default AdminPanel;
