const UserList = ({ listName, listData }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {listName} :<span className='w-75'>{listData}</span>
    </li>
  );
};

export default UserList;
