import { userTypes } from "./ActionTypes";

export const getSingleCustomer = (payload) => ({
    type: userTypes.ADMIN_GET_SINGLE_CUSTOMER,
    payload: payload
})

export const getSingleFulfilment = (payload) => ({
    type: userTypes.ADMIN_GET_SINGLE_FULFILMENT,
    payload: payload
})