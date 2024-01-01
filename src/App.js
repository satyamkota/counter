import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseValue, decreaseValue } from './actions';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  return (
    <Fragment>
      <div className='container bg-info w-25 p-2 text-center mt-5'>
        <h1 className='text-white'>Redux Counter</h1>
        <div className='mt-3'>
          {/* <input type="text" value={value} readOnly className='text-center'/> */}
          <h1 className='mt-2 text-bold'>{value}</h1>
        </div>
        <div className='mt-3'>
          <button type='button' className='m-2 p-1 btn btn-success' onClick={() => dispatch(increaseValue())}>Increase</button>
          <button type='button' className='m-2 p-1 btn btn-danger' onClick={() => dispatch(decreaseValue())}>Decrease</button>
        </div>
      </div>
    </Fragment>

    
    
  );
}

export default App;
