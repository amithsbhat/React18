import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Coimbatore", "Dombivli", "Goregaon", "London", "Paris", "NY"];
  let items2 = [];
  const handleClick = (event: MouseEvent) => console.log(event);
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
            className="list-group-item active"
            key={each}
            onClick={handleClick}
          >
            {each}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
