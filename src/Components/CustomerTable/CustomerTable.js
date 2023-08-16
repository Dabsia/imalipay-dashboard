import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import { getSingleCustomer } from '../../Redux/Actions'
import { useSelector, useDispatch } from "react-redux";

const CustomerTable = () => {

    const navigate = useNavigate()

    const allCustomers = useSelector(state => state.user.allCustomers)

    const dispatch = useDispatch()

    const navigatingFunction = (user) => {
        dispatch(getSingleCustomer(user))
        navigate(`/customer/${user.id}`)

    }

    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'NAME',
            selector: row => row.name
        },

        {
            name: 'NUMBER',
            selector: row => row.number
        },

        {
            name: 'DATE Joined',
            selector: row => row.dateJoined
        },
        {
            name: 'KYC. STATUS.',
            selector: row => row.verified,
            conditionalCellStyles: [
                {
                    when: row => row.verified === 'verified',
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
                data={allCustomers}
                selectableRows
                fixedHeader
                highlightOnHover
                pointerOnHover
                responsive
                onRowClicked={(row) => navigatingFunction(row)}

            />
        </div>



    )


}

export default CustomerTable