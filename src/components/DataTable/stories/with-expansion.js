import React from 'react';
import DataTable, {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
} from '../../DataTable';
import { initialRows, headers } from './shared';

export default () => (
  <DataTable
    rows={initialRows}
    headers={headers}
    render={({ rows, headers, getHeaderProps, getRowProps }) => (
      <TableContainer title="DataTable with expansion">
        <Table>
          <TableHead>
            <TableRow>
              <TableExpandHeader />
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <React.Fragment key={row.id}>
                <TableExpandRow {...getRowProps({ row })}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableExpandRow>
                {row.isExpanded && (
                  <TableExpandedRow>
                    <TableCell colSpan={headers.length + 1}>
                      <h1>Expandable row content</h1>
                      <p>Description here</p>
                    </TableCell>
                  </TableExpandedRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);
