import DataTable from "react-data-table-component";
import Search from "../Search/Search";
import { DefaultersData } from "./DefaultersData";

const DefaultersTable = () => {


    const columns = [

        {
            name: 'NAME',
            selector: row => row.name
        },

        {
            name: 'EMAIL',
            selector: row => row.email
        },

        {
            name: 'DATE REQUESTED',
            selector: row => row.date
        },
        {
            name: 'LOAN STATUS.',
            selector: row => row.active,
            conditionalCellStyles: [
                {
                    when: row => row.active === 'active',
                    style: {
                        color: 'rgba(63, 195, 128, 0.9)',
                    },
                }
            ],
        },

    ]



    return (
        <div className="dataTableParent" >
            <Search placeholder={"Search for Customer's name"} />
            <DataTable
                columns={columns}
                data={DefaultersData}
                selectableRows
                fixedHeader
                highlightOnHover
                pointerOnHover
                responsive

            />
        </div>



    )


}

export default DefaultersTable