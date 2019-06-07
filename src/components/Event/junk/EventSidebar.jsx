import React from 'react';
import Col from 'react-bootstrap/Col';

class EventSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      label: 'Plating Preperation',
    };
  }

  handleAdd() {
    // this.setState((prevState) => ({
    //   types: [...prevState.types, 'date'],
    // }));
    this.setState({ types: [...this.state.types, 'date'] });
  }

  handleChange(e, index) {
    const statesDeStructure = this.state;
    statesDeStructure.types[index] = e.target.value;
    console.log(e.target.value);
    this.setState({ types: statesDeStructure.types });
  }


  handleRemove(index) {
    this.state.types.splice(index, 1);
    console.log(this.state.types, 'SSSS');
    this.setState({ types: this.state.types });
  }

  render() {
    const statesDeStructure = this.state;
    return (
      <div>
        <Col sm={8} className="border">
          {
          statesDeStructure.types.map((type, index) => {
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
        </Col> 
      </div>
    );
  }
}

export default EventSidebar;
