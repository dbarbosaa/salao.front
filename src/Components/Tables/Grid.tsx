import DataTable, { ConditionalStyles, PaginationOptions, SortOrder, TableColumn } from "react-data-table-component";

interface GridType {
  colunas: any;
  itens: any[];
  conditionalRowStyles?: ConditionalStyles<any>[];
  selectableRows?: boolean;
  paginationServer?: boolean;
  paginationTotalRows?: number;
  onChangeRowsPerPage?: (currentRowsPerPage: number, currentPage: number) => void;
  onChangePage?: (page: number, totalRows: number) => void;
  onRowClicked?: (row: any, event: any) => void;
  take?: number;
  limit?: number;
  progressPending?: boolean;
  onSort?: (selectedColumn: TableColumn<any>, sortDirection: SortOrder) => void;
}

export default function Grid({
  progressPending,
  take = 10,
  colunas,
  itens,
  conditionalRowStyles,
  selectableRows,
  paginationServer,
  paginationTotalRows,
  onChangePage,
  onChangeRowsPerPage,
  onRowClicked,
  onSort,
}: GridType) {
  const paginationComponentOptions: PaginationOptions = {
    rowsPerPageText: `Registros por página`,
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <>
        <DataTable
          onSort={onSort}
          progressPending={progressPending}
          paginationPerPage={take}
          onRowClicked={onRowClicked}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          pagination={true}
          paginationServer={paginationServer}
          paginationTotalRows={paginationTotalRows}
          selectableRows={selectableRows}
          conditionalRowStyles={conditionalRowStyles}
          highlightOnHover={true}
          columns={colunas}
          data={itens}
          noDataComponent={"..."}
          paginationComponentOptions={paginationComponentOptions}
        />
    </>
  );
}
