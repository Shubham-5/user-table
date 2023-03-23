import UserList from "./UserList";

const UserDetails = ({ user }) => {
  return (
    <div>
      <h3 className='mb-4'>User Details</h3>
      <div className='card'>
        <ul className='list-group'>
          <UserList listData={user?.todo?.id} listName='ToDo ID' />
          <UserList listData={user?.todo?.title} listName='ToDo Title' />
          <UserList listData={user?.id} listName='User ID' />
          <UserList listData={user?.name} listName='Name' />
          <UserList listData={user?.email} listName='Email' />
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
