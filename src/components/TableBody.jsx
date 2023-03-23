const TableBody = ({ filterData, data, fetchUserDetails }) => {
  return (
    <tbody>
      {filterData.length
        ? filterData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.completed ? "complete" : "incomplete"}</td>
              <td>
                <button
                  className='btn btn-outline-dark'
                  onClick={() => fetchUserDetails(row)}>
                  view user
                </button>
              </td>
            </tr>
          ))
        : data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.completed ? "complete" : "incomplete"}</td>
              <td>
                <button
                  className='btn btn-outline-dark'
                  onClick={() => fetchUserDetails(row)}>
                  view user
                </button>
              </td>
            </tr>
          ))}
    </tbody>
  );
};

export default TableBody;
