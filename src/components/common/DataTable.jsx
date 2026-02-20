import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '../ui/table';
import Pagination from './Pagination';
import TableSkeleton from '../common/TableSkeleton';
import { FileX } from 'lucide-react';

const DataTable = ({
  columns,
  data,
  loading,
  pagination,
  onPageChange,
  emptyMessage = 'No data found',
}) => {
  if (loading) {
    return <TableSkeleton rows={6} columns={columns.length} />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <FileX className="w-6 h-6 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={column.className}
                  style={{ width: column.width }}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={row.id || rowIndex} className="hover:bg-muted/30">
                {columns.map((column) => (
                  <TableCell key={column.key} className={column.cellClassName}>
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key] ?? '-'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {pagination && (pagination.totalPages > 1 || pagination.hasNext || pagination.hasPrev) && (
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default DataTable;
