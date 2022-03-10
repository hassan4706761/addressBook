import React from "react";

const ObserverDiv = ({ isLoading, setObserve }) => {
  return (
    <div ref={setObserve}>
      {isLoading ? <div>Loading More</div> : <div> No more user </div>}
    </div>
  );
};
export default ObserverDiv;
