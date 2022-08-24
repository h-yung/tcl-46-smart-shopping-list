import { useContext } from 'react';
import { MyContext } from '../App';
import { getUserListsArr } from '../utils/user';

const ListSwitcher = ({ switchList, rmListUpdate }) => {
	const [userList, setUserList] = useContext(MyContext).userListCtx;
	return (
		<div>
			<h1>My Lists</h1>
			{getUserListsArr(userList)
				.filter(([_, token]) => token)
				.map(([name, token]) => (
					<div key={token}>
						<button onClick={() => switchList(token)}>
							<b>{name === 'listToken' ? 'Default List' : name}</b>
						</button>
						<button onClick={() => rmListUpdate(name, token)}>Untrack</button>
					</div>
				))}
		</div>
	);
};

export default ListSwitcher;
