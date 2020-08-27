import React from 'react';

function Dog(props) {
  return (
    <tr>
      <td><img src={props.picture} onClick={() => props.openPopup(props.picture)} /></td>
      <td>{props.name}</td>
      <td>{props.breedName}</td>
      <td>{props.gender}</td>
      <td>{props.age}</td>
      <td>{props.used ? 'Usagé' : 'Neuf'}</td>
    </tr>
  );
}

export default Dog;
