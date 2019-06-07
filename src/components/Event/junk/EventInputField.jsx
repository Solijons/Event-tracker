import React from 'react';
import TextField from '@material-ui/core/TextField';

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      label: 'Pick a date',
    };
  }

  handleAdd() {
    this.setState((prevState) => ({
      types: [...prevState.types, 'date'],
    }));
  }

  render() {
    return (
      <div>
        {
          this.state.types.map((type) => {
            return (
              <form className="container" noValidate>
                <TextField
                  id="date"
                  label={this.state.label}
                  type={type}
                  defaultValue={Date.UTC()}
                  className="textField"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            );
          })
      }
        <button type="button" onClick={(e) => this.handleAdd(e)}>Add Date</button>

      </div>
    );
  }
}
export default DateInput;
