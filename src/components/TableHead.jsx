const TableHead = ({ handleSort }) => {
  return (
    <thead>
      <tr>
        <th scope='col' onClick={handleSort}>
          ToDo ID
          <img
            className='sort-icon'
            src={
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGw4IDEwaC0xNmw4LTEwem04IDE0aC0xNmw4IDEwIDgtMTB6Ii8+PC9zdmc+"
            }
            alt='sort icon'
          />
        </th>
        <th scope='col'>Title</th>
        <th scope='col'>Status</th>
        <th scope='col'>Action</th>
      </tr>
    </thead>
  );
};

export default TableHead;
