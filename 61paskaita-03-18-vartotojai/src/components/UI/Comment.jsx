import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import CardsContext from '../../contexts/CardsContext';
import { CardsActionTypes } from '../../contexts/CardsContext';

const Comment = ({ comment, id }) => {
	const { users, loggedInUser } = useContext(UsersContext);
	const author = users.find(user => user.id === comment.authorId);
	const { dispatch } = useContext(CardsContext);
	return (
		<div>
			{users.length ? (
				<>
					<p>Commented by: {author.username}</p>
					<p>{comment.text}</p>
					{loggedInUser.id === comment.authorId && (
						<button
							onClick={() => {
								dispatch({
									type: CardsActionTypes.DELETE_COMMENT,
									payload: { commentId: comment.id, cardId: id }
								});
							}}
						>
							Delete
						</button>
					)}
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Comment;
