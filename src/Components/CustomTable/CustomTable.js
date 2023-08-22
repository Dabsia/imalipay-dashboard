import { useState } from "react";
import DataTable from "react-data-table-component";
import { OverviewTableData } from "../OverviewTable/OverviewTableData";
import './CustomTable.css'


import Search from "../Search/Search";

const CustomTable = () => {

    const [filterText, setFilterText] = useState('');
    const filteredItems = OverviewTableData.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );



    const columns = [
        {
            name: 'NAME',
            selector: row => row.name
        },
        // {
        //     name: ' IMAGE',
        //     selector: row => row.img
        // },
        {
            name: 'NUMBER',
            selector: row => row.number
        },
        {
            name: ' DEPOSIT',
            selector: row => row.amount
        },
        {
            name: 'DATE',
            selector: row => row.date
        },
        {
            name: 'VOUCHER NO.',
            selector: row => row.voucher
        },
        {
            name: 'TRANS.STATUS',
            selector: row => row.status,
            conditionalCellStyles: [
                {
                    when: row => row.status === 'successful',
                    style: {

                        color: 'rgba(63, 195, 128, 0.9)',

                    },
                },
                {
                    when: row => row.status === 'failed',
                    style: {

                        color: 'red',

                    },
                },

            ],
        },

    ]



    return (
        <div className="dataTableParent" >
            <Search filterText={filterText} setFilterText={setFilterText} placeholder={"Search for Customer's name"} />
            <DataTable
                columns={columns}
                data={filteredItems}
                selectableRows
                fixedHeader
                pagination
                highlightOnHover
                pointerOnHover
                responsive


            />
        </div>



    )


}

export default CustomTable