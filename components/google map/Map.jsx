import React from "react";

const Map = () => {
  return (
    <>
      <iframe
        className="w-full"
        // width="600"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Bishwoshanti%20Chowk%20Bus%20Station%20chitwan%20nepal&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </>
  );
};

export default Map;
