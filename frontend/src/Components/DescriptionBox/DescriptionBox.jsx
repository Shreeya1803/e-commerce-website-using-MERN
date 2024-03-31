import React from "react";


import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          autem esse ipsum reiciendis repellendus distinctio optio voluptatum
          id, blanditiis iure amet animi reprehenderit quis numquam enim
          consequuntur. Expedita consequuntur consequatur sit dolore vel quis
          tempore..
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          dolores beatae accusantium omnis dolor suscipit, dolorem dignissimos.
          Ut, eveniet doloribus dolore fuga odio culpa recusandae enim expedita
          quidem autem error!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
