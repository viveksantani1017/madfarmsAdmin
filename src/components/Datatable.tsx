import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Flex,
  IconButton,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
  Tooltip,
  Button,
  Tfoot,
} from "@chakra-ui/react";
import { AddIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  MdFirstPage,
  MdLastPage,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import exportFromJSON from "export-from-json";

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};

export function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    getPaginationRowModel: getPaginationRowModel(),
  });
  const fileName = "Cattle records";
  const exportType = "xls";
  // console.log(data);
  const exportToExcel = () => {
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <>
      <Box w="100%" h="350px" overflowY="auto">
        <Table variant="striped" >
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  const meta: any = header.column.columnDef.meta;
                  return (
                    <Th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      isNumeric={meta?.isNumeric}
                      // position={"sticky"}
                      // top="0"
                      // bg="gray.100"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      <chakra.span pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "desc" ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  const meta: any = cell.column.columnDef.meta;
                  return (
                    <Td key={cell.id} isNumeric={meta?.isNumeric}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  const meta: any = header.column.columnDef.meta;
                  return (
                    <Th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      isNumeric={meta?.isNumeric}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      <chakra.span pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "desc" ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Tfoot>
        </Table>
      </Box>
      <Flex
        width={"100%"}
        rounded="md"
        boxShadow="2px 2px 2px 2px rgba(0.2, 0, 0, 0.2)"
        justifyContent={"space-evenly"}
        alignItems={"center"}
        mt="5"
      >
        <Tooltip label="Go To First Page" hasArrow>
          <IconButton
            aria-label="first page"
            icon={<MdFirstPage />}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          />
        </Tooltip>
        <Tooltip label="Go To Previous Page" hasArrow>
          <IconButton
            aria-label="previous page"
            icon={<MdSkipPrevious />}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
        </Tooltip>
        <Tooltip label="Go To Next Page" hasArrow>
          <IconButton
            aria-label="next page"
            icon={<MdSkipNext />}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </Tooltip>
        <Tooltip label="Go To Last Page" hasArrow>
          <IconButton
            aria-label="last page"
            icon={<MdLastPage />}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          />
        </Tooltip>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>

        <FormControl display="flex" alignItems="center" w="20%">
          <FormLabel size="sm">Go To Page:</FormLabel>
          <Input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </FormControl>
        <Select
          w="10%"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50, 100, 500, 1000].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
        <Button onClick={exportToExcel}>Export Data</Button>
        {/* <div>{table.getRowModel().rows.length} Rows</div> */}
        {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
      </Flex>
    </>
  );
}
