import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import CreateNurseryField from './CreateNurseryFieldsModal';

import { API_URL } from '../../config';


class NurseryFieldTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: '#', field: 'id', sortable: true, filter: true, checkboxSelection: true, width: 60,
      },
      {
        headerName: 'Add Events',
        field: 'id',
        cellRenderer(params) {
          return `<a href="/add-event?id=${params.value}"><button class="custom-btn">Add Event</button></a><a style="margin-left:10px;" href="/addevent?id=${params.value}"><button class='custom-btn btn-def'>View Event</button></a>`}
      },
      {
        headerName: 'Actual Planting Date', field: 'actual_planting_date', sortable: true, filter: true, editable: true, width: 220,
      },
      {
        headerName: 'Farm', field: 'farm', sortable: true, filter: true, editable: true, width: 130,
      },
      {
        headerName: 'Field', field: 'field', sortable: true, filter: true, editable: true, width: 160,
      },
      {
        headerName: 'Forcasted Planting Date', field: 'forcasted_planting_date', sortable: true, filter: true, editable: true, width: 260,
      },
      {
        headerName: 'Location', field: 'location', sortable: true, filter: true, editable: true, width: 160,
      },
      {
        headerName: 'Sre(s)', field: 'sres', sortable: true, filter: true, editable: true, width: 140,
      },
      {
        headerName: 'Week', field: 'week', sortable: true, filter: true, editable: true, width: 140,
      },
      {
        headerName: 'Year', field: 'year', sortable: true, filter: true, editable: true, width: 140,
      },
      ],
      rowSelection: 'multiple',
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/nursery`)
      .then((result) => result.json())
      .then((rowData) => this.setState({ rowData }));
  }

  render() {
    const { columnDefs, rowData, rowSelection } = this.state;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <CreateNurseryField />
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            onCellClicked={this.handleClick}
            columnDefs={columnDefs}
            rowData={rowData}
            onGridReady={this.onGridReady}
            rowSelection={rowSelection}
          />
        </div>
      </div>
    );
  }
}

export default NurseryFieldTable;
