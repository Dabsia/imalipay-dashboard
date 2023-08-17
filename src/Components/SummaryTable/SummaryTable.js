import DataTable from "react-data-table-component";
import { summaryData } from "./SummaryData";


import Search from "../Search/Search";

const SummaryTable = () => {
    const columns = [
        {
            name: 'DATE',
            selector: row => row.date
        },
        // {
        //     name: ' IMAGE',
        //     selector: row => row.img
        // },
        {
            name: 'ACCOUNT NAME',
            selector: row => row.account
        },
        {
            name: ' ACCOUNT NUMBER',
            selector: row => row.accountNumber
        },
        {
            name: 'INVOICE TOTAL',
            selector: row => row.total
        },
        {
            name: 'AMOUNT RECEIVED',
            selector: row => row.received
        },
        {
            name: 'PERCENTAGE RECONCILED',
            selector: row => row.percentage,
            conditionalCellStyles: [
                {
                    when: row => row.percentage === '82%',
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
            <Search placeholder={"Search for Customer's name"} />
            <DataTable
                columns={columns}
                data={summaryData}
                selectableRows
                fixedHeader
                highlightOnHover
                pointerOnHover
                responsive


            />
        </div>



    )


}

export default SummaryTable