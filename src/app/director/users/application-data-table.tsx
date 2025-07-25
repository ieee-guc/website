"use client"

import * as React from "react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Filter, Search, UserPlus } from "react-feather"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    committees: string[]
    statuses: string[]
}

export function ApplicationDataTable<TData, TValue>({
    columns,
    data,
    committees,
    statuses,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
    })

    return (
        <div>
            <div className="flex items-center py-4 justify-between gap-4 flex-col sm:flex-row">
                <div
                    className="flex items-center space-x-0 placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto">
                    <Search className="text-slate-400 dark:text-gray-400 ml-4" />

                    <Input
                        placeholder="Search by email..."
                        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("email")?.setFilterValue(event.target.value)
                        }
                        className="placeholder:text-slate-400 bg-gray-50 border-none text-light-text focus:ring-primary-600 focus:border-primary-600 block dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-11/12 mx-auto"
                    />
                </div>
                <div
                    className="flex items-center space-x-0 placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto">
                    <Filter className="text-slate-400 dark:text-gray-400 ml-4" />
                    <select
                        value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("status")?.setFilterValue(event.target.value)}
                        className="text-sm p-2.5 focus:outline-none placeholder:text-slate-400 bg-gray-50 border-none text-light-text focus:ring-primary-600 rounded-xl focus:border-primary-600 block  dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    >
                        <option value="">Filter by status...</option>
                        {statuses.map((status: string) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
                <div
                    className="flex items-center space-x-0 placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto">
                    <Filter className="text-slate-400 dark:text-gray-400 ml-4" />
                    <select
                        value={(table.getColumn("committee")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("committee")?.setFilterValue(event.target.value)}
                        className="text-sm p-2.5 focus:outline-none placeholder:text-slate-400 bg-gray-50 border-none text-light-text focus:ring-primary-600 rounded-xl focus:border-primary-600 block  dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    >
                        <option value="">Filter by committee...</option>
                        {committees.map((committee: string) => (
                            <option key={committee} value={committee}>
                                {committee}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text">
                <Table className="border-light-border dark:border-dark-border">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-between items-center py-4 space-y-4 flex-col sm:flex-row">
                <div className="flex items-center space-x-2">
                    <Button
                        className="text-light-text dark:text-dark-text bg-light-sub-bg dark:bg-dark-sub-bg"
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        className="text-light-text dark:text-dark-text bg-light-sub-bg dark:bg-dark-sub-bg"
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-light-text dark:text-dark-text">
                    Page
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </strong>
                </span>
            </div>
        </div>
    )
}
``