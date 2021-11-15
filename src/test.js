import * as React from 'react';
import { Table } from '@table-library/react-table-library/table';
 
const list = [ ... ];
 
const App = () => {
    const data = { nodes: list };
   
    return (
      <Table data={data}>
        {(tableList) => (
          <Header>
            <HeaderRow>
              <HeaderCell>Task</HeaderCell>
              <HeaderCell>Deadline</HeaderCell>
              <HeaderCell>Type</HeaderCell>
              <HeaderCell>Complete</HeaderCell>
            </HeaderRow>
          </Header>
        )}
      </Table>
    );
  };