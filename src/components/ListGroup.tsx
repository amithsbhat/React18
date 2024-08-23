function ListGroup() {
  let items = ["Coimbatore", "Dombivli", "Goregaon", "London", "Paris", "NY"];
  let items2 = [];

  const getMsg = () => {
    return items2.length == 0 && <p>No items to show in item 2</p>;
  };
  return (
    <>
      <h1>Hola!</h1>
      {getMsg()}
      <ul className="list-group">
        {items.map((each, indx) => (
          <li
            className="list-group-item"
            key={each}
            onClick={() => console.log(each, indx)}
          >
            {each}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
