import React from 'react';

const AddNewNurseryFieldEvent = (props) => {

  return (
    <div>
      {
          props.typeValue.map((type, index) => {
            return (
              <div key={index} className="form">
                <p className="center-align">
                  Plantings Date
                  <input type={type} className="datepicker center-align" />
                </p>
                <p className="center-align formfield">
                  Planting Preperation Comments
                  <textarea rows="4" cols="50" id="textarea1" className="textarea" placeholder="Add comments" />
                  <label htmlFor="Red">
                    <input type="checkbox" />
                    <span>Red</span>
                  </label>
                  <label htmlFor="Red">
                    <input type="checkbox" />
                    <span>Green</span>
                  </label>

                  <label htmlFor="Red">
                    <input type="checkbox" />
                    <span>Yellow</span>
                  </label>
                </p>

                <p className="center-align"> 
                  Planting Preparation
                  <select>
                    <option value="">Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </p>
              </div>

            );
          })
        }
    </div>
  );
};

export default AddNewNurseryFieldEvent;
