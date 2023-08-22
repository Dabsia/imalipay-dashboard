import { userTypes } from "./ActionTypes";

export const getSingleCustomer = (payload) => ({
    type: userTypes.ADMIN_GET_SINGLE_CUSTOMER,
    payload: payload
})

export const getSingleFulfilment = (payload) => ({
    type: userTypes.ADMIN_GET_SINGLE_FULFILMENT,
    payload: payload
})

export const openConnectAccountModal = () => ({
    type: userTypes.OPEN_CONNECT_ACCOUNT_MODAL
})

export const closeConnectAccountModal = () => ({
    type: userTypes.CLOSE_CONNECT_ACCOUNT_MODAL
})

export const openMobileAccountModal = () => ({
    type: userTypes.OPEN_MOBILE_ACCOUNT_MODAL
})

export const closeMobileAccountModal = () => ({
    type: userTypes.CLOSE_MOBILE_ACCOUNT_MODAL
})