import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../Button';
import DataTable, {
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
} from '../../DataTable';
import { batchActionClick, initialRows, headers } from './';

export default () => (
  <DataTable
    rows={initialRows}
    headers={headers}
    render={({
      rows,
      headers,
      getHeaderProps,
      getSelectionProps,
      getBatchActionProps,
      onInputChange,
      selectedRows,
    }) => (
      <TableContainer title="DataTable">
        <TableToolbar>
          <TableBatchActions {...getBatchActionProps()}>
            <TableBatchAction onClick={batchActionClick(selectedRows)}>
              Ghost
            </TableBatchAction>
            <TableBatchAction onClick={batchActionClick(selectedRows)}>
              Ghost
            </TableBatchAction>
            <TableBatchAction onClick={batchActionClick(selectedRows)}>
              Ghost
            </TableBatchAction>
          </TableBatchActions>
          <TableToolbarSearch onChange={onInputChange} />
          <TableToolbarContent>
            <TableToolbarAction
              iconName="download"
              iconDescription="Download"
              onClick={action('TableToolbarAction - Download')}
            />
            <TableToolbarAction
              iconName="edit"
              iconDescription="Edit"
              onClick={action('TableToolbarAction - Edit')}
            />
            <TableToolbarAction
              iconName="settings"
              iconDescription="Settings"
              onClick={action('TableToolbarAction - Settings')}
            />
            <Button onClick={action('Add new row')} small kind="primary">
              Add new
            </Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableSelectAll {...getSelectionProps()} />
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableSelectRow {...getSelectionProps({ row })} />
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);
