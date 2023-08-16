import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import { getSingleFulfilment } from '../../Redux/Actions'
import { useSelector, useDispatch } from "react-redux";

const FulfilmentsTable = () => {

    const navigate = useNavigate()

    const allFulfilMents = useSelector(state => state.user.allFulfilMents)


    const dispatch = useDispatch()

    const navigatingFunction = (user) => {
        dispatch(getSingleFulfilment(user))
        navigate(`/fulfilment/${user.id}`)

    }

    const columns = [

        {
            name: 'CUSTOMERS',
            selector: row => row.name
        },

        {
            name: 'PRICE',
            selector: row => row.amountLoaned
        },

        {
            name: 'DATE ',
            selector: row => row.dateJoined
        },
        {
            name: 'VEHICLE MODEL ',
            selector: row => row.vehicle
        },
        {
            name: 'COL. STATUS.',
            selector: row => row.status,
            conditionalCellStyles: [
                {
                    when: row => row.status === 'Successful',
                    style: {
                        color: 'rgba(63, 195, 128, 0.9)',
                    },
                },
                {
                    when: row => row.status === 'Active',
                    style: {
                        color: 'rgba(63, 195, 128, 0.9)',
                    },
                },
                {
                    when: row => row.status === 'Failed',
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
                data={allFulfilMents}
                selectableRows
                fixedHeader
                highlightOnHover
                pointerOnHover
                responsive
                pagination
                onRowClicked={(row) => navigatingFunction(row)}

            />
        </div>



    )


}

export default FulfilmentsTable