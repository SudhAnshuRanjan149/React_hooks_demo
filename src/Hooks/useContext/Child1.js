import React from 'react';

const Child1 = () => {
  console.log("child1");
  return (
    <>
      <div>
        <span>Child1:</span>
        <button>chnage theme</button>
      </div>
    </>
  );
};

export default React.memo(Child1);
