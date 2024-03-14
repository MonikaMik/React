import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';

const UserPage = () => {
	const { loggedInUser } = useContext(UsersContext);

	return (
		<section>
			<h1>User page</h1>
			<p>
				<b>Username: </b> {loggedInUser.username}
			</p>
			<p>
				<b>Email: </b> {loggedInUser.email}
			</p>
			<p>
				<b>Role: </b> {loggedInUser.role}
			</p>
		</section>
	);
};
export default UserPage;
