import { userTypes } from "./ActionTypes";

const initialState = {
    allCustomers: [
        {
            id: '3066',
            name: 'Phoenix Baker',
            number: 1234567890,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            dateOfBirth: '02 Feb 1993',
            gender: 'Male',
            stateOfResidence: 'Lagos',
            bankName: 'Access Bank',
            acctNumber: 3456679899,
            transactionDate: 'Jan 6, 2022',
            status: 'Successful',
            address: '23 Churchill road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Lagos',
            vehicle: 'Toyota',
            repaymentDuration: '6 months',
            repaymentEnds: '03 Dec 2022',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '20,000'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3067',
            name: 'Peter Joshua',
            number: 987654321,
            dateJoined: '10 Feb, 2022',
            verified: 'verified',
            dateOfBirth: '02 Jul 1983',
            status: 'Active',
            stateOfResidence: 'Abuja',
            bankName: 'Unity Bank',
            acctNumber: 3456820943,
            gender: 'Male',
            address: '78 Babaginda road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            transactionDate: 'Jan 6, 2022',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Abuja',
            vehicle: 'Prado',
            repaymentEnds: '03 Dec 2022',
            repaymentDuration: '6 months',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '23,200'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '25,000'
                }
            ]
        },
        {
            id: '3068',
            name: 'Simon Joseph',
            number: 6789457680,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            status: 'Successful',
            gender: 'Male',
            dateOfBirth: '02 Aug 1999',
            stateOfResidence: 'Delta',
            repaymentEnds: '03 Dec 2022',
            bankName: 'First Bank',
            acctNumber: 9876543222,
            address: '23 Bank road',
            amountLoaned: '604,051',
            company: 'Company Insurance PLC',
            transactionDate: 'Jan 6, 2022',
            location: 'Mega Autoshop, Delta',
            vehicle: 'Ford',
            repaymentDuration: '6 months',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3069',
            name: 'Brown Lesley',
            number: 123451234,
            dateJoined: '06 jan, 2022',
            verified: 'Failed',
            dateOfBirth: '02 Feb 2000',
            status: 'Active',
            stateOfResidence: 'Rivers',
            bankName: 'Zenith Bank',
            gender: 'Male',
            repaymentEnds: '03 Dec 2022',
            transactionDate: 'Jan 6, 2022',
            acctNumber: 123456975656,
            address: '67 Market road',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Rivers',
            vehicle: 'Hilux',
            repaymentDuration: '6 months',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                }
            ]
        },
    ],
    allFulfilMents: [
        {
            id: '3066',
            name: 'Phoenix Baker',
            number: 1234567890,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            dateOfBirth: '02 Feb 1993',
            gender: 'Male',
            stateOfResidence: 'Lagos',
            bankName: 'Access Bank',
            acctNumber: 3456679899,
            transactionDate: 'Jan 6, 2022',
            status: 'Successful',
            address: '23 Churchill road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Lagos',
            vehicle: 'Toyota',
            repaymentDuration: '6 months',
            repaymentEnds: '03 Dec 2022',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '20,000'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3067',
            name: 'Peter Joshua',
            number: 987654321,
            dateJoined: '10 Feb, 2022',
            verified: 'verified',
            dateOfBirth: '02 Jul 1983',
            status: 'Active',
            stateOfResidence: 'Abuja',
            bankName: 'Unity Bank',
            acctNumber: 3456820943,
            gender: 'Male',
            address: '78 Babaginda road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            transactionDate: 'Jan 6, 2022',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Abuja',
            vehicle: 'Prado',
            repaymentEnds: '03 Dec 2022',
            repaymentDuration: '6 months',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '23,200'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '25,000'
                }
            ]
        },
        {
            id: '3068',
            name: 'Simon Joseph',
            number: 6789457680,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            status: 'Failed',
            gender: 'Male',
            dateOfBirth: '02 Aug 1999',
            stateOfResidence: 'Delta',
            repaymentEnds: '03 Dec 2022',
            bankName: 'First Bank',
            acctNumber: 9876543222,
            address: '23 Bank road',
            amountLoaned: '604,051',
            company: 'Company Insurance PLC',
            transactionDate: 'Jan 6, 2022',
            location: 'Mega Autoshop, Delta',
            vehicle: 'Ford',
            repaymentDuration: '6 months',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3069',
            name: 'Brown Lesley',
            number: 123451234,
            dateJoined: '06 jan, 2022',
            verified: 'Failed',
            dateOfBirth: '02 Feb 2000',
            status: 'Active',
            stateOfResidence: 'Rivers',
            bankName: 'Zenith Bank',
            gender: 'Male',
            repaymentEnds: '03 Dec 2022',
            transactionDate: 'Jan 6, 2022',
            acctNumber: 123456975656,
            address: '67 Market road',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Rivers',
            vehicle: 'Hilux',
            repaymentDuration: '6 months',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                }
            ]
        }, {
            id: '3065',
            name: 'Phoenix Baker',
            number: 1234567890,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            dateOfBirth: '02 Feb 1993',
            gender: 'Male',
            stateOfResidence: 'Lagos',
            bankName: 'Access Bank',
            acctNumber: 3456679899,
            transactionDate: 'Jan 6, 2022',
            status: 'Failed',
            address: '23 Churchill road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Lagos',
            vehicle: 'Toyota',
            repaymentDuration: '6 months',
            repaymentEnds: '03 Dec 2022',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '20,000'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3064',
            name: 'Peter Joshua',
            number: 987654321,
            dateJoined: '10 Feb, 2022',
            verified: 'verified',
            dateOfBirth: '02 Jul 1983',
            status: 'Active',
            stateOfResidence: 'Abuja',
            bankName: 'Unity Bank',
            acctNumber: 3456820943,
            gender: 'Male',
            address: '78 Babaginda road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            transactionDate: 'Jan 6, 2022',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Abuja',
            vehicle: 'Prado',
            repaymentEnds: '03 Dec 2022',
            repaymentDuration: '6 months',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '23,200'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '25,000'
                }
            ]
        },
        {
            id: '3063',
            name: 'Simon Joseph',
            number: 6789457680,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            status: 'Successful',
            gender: 'Male',
            dateOfBirth: '02 Aug 1999',
            stateOfResidence: 'Delta',
            repaymentEnds: '03 Dec 2022',
            bankName: 'First Bank',
            acctNumber: 9876543222,
            address: '23 Bank road',
            amountLoaned: '604,051',
            company: 'Company Insurance PLC',
            transactionDate: 'Jan 6, 2022',
            location: 'Mega Autoshop, Delta',
            vehicle: 'Ford',
            repaymentDuration: '6 months',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3062',
            name: 'Brown Lesley',
            number: 123451234,
            dateJoined: '06 jan, 2022',
            verified: 'Failed',
            dateOfBirth: '02 Feb 2000',
            status: 'Successful',
            stateOfResidence: 'Rivers',
            bankName: 'Zenith Bank',
            gender: 'Male',
            repaymentEnds: '03 Dec 2022',
            transactionDate: 'Jan 6, 2022',
            acctNumber: 123456975656,
            address: '67 Market road',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Rivers',
            vehicle: 'Hilux',
            repaymentDuration: '6 months',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                }
            ]
        }, {
            id: '3061',
            name: 'Phoenix Baker',
            number: 1234567890,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            dateOfBirth: '02 Feb 1993',
            gender: 'Male',
            stateOfResidence: 'Lagos',
            bankName: 'Access Bank',
            acctNumber: 3456679899,
            transactionDate: 'Jan 6, 2022',
            status: 'Successful',
            address: '23 Churchill road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Lagos',
            vehicle: 'Toyota',
            repaymentDuration: '6 months',
            repaymentEnds: '03 Dec 2022',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '20,000'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3060',
            name: 'Peter Joshua',
            number: 987654321,
            dateJoined: '10 Feb, 2022',
            verified: 'verified',
            dateOfBirth: '02 Jul 1983',
            status: 'Failed',
            stateOfResidence: 'Abuja',
            bankName: 'Unity Bank',
            acctNumber: 3456820943,
            gender: 'Male',
            address: '78 Babaginda road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            transactionDate: 'Jan 6, 2022',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Abuja',
            vehicle: 'Prado',
            repaymentEnds: '03 Dec 2022',
            repaymentDuration: '6 months',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '23,200'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '25,000'
                }
            ]
        },
        {
            id: '3059',
            name: 'Simon Joseph',
            number: 6789457680,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            status: 'Active',
            gender: 'Male',
            dateOfBirth: '02 Aug 1999',
            stateOfResidence: 'Delta',
            repaymentEnds: '03 Dec 2022',
            bankName: 'First Bank',
            acctNumber: 9876543222,
            address: '23 Bank road',
            amountLoaned: '604,051',
            company: 'Company Insurance PLC',
            transactionDate: 'Jan 6, 2022',
            location: 'Mega Autoshop, Delta',
            vehicle: 'Ford',
            repaymentDuration: '6 months',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3058',
            name: 'Brown Lesley',
            number: 123451234,
            dateJoined: '06 jan, 2022',
            verified: 'Failed',
            dateOfBirth: '02 Feb 2000',
            status: 'Successful',
            stateOfResidence: 'Rivers',
            bankName: 'Zenith Bank',
            gender: 'Male',
            repaymentEnds: '03 Dec 2022',
            transactionDate: 'Jan 6, 2022',
            acctNumber: 123456975656,
            address: '67 Market road',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Rivers',
            vehicle: 'Hilux',
            repaymentDuration: '6 months',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                }
            ]
        }, {
            id: '3057',
            name: 'Phoenix Baker',
            number: 1234567890,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            dateOfBirth: '02 Feb 1993',
            gender: 'Male',
            stateOfResidence: 'Lagos',
            bankName: 'Access Bank',
            acctNumber: 3456679899,
            transactionDate: 'Jan 6, 2022',
            status: 'Successful',
            address: '23 Churchill road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Lagos',
            vehicle: 'Toyota',
            repaymentDuration: '6 months',
            repaymentEnds: '03 Dec 2022',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '20,000'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3056',
            name: 'Peter Joshua',
            number: 987654321,
            dateJoined: '10 Feb, 2022',
            verified: 'verified',
            dateOfBirth: '02 Jul 1983',
            status: 'Failed',
            stateOfResidence: 'Abuja',
            bankName: 'Unity Bank',
            acctNumber: 3456820943,
            gender: 'Male',
            address: '78 Babaginda road',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            transactionDate: 'Jan 6, 2022',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Abuja',
            vehicle: 'Prado',
            repaymentEnds: '03 Dec 2022',
            repaymentDuration: '6 months',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '23,200'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '25,000'
                }
            ]
        },
        {
            id: '3055',
            name: 'Simon Joseph',
            number: 6789457680,
            dateJoined: '06 jan, 2022',
            verified: 'verified',
            status: 'Successful',
            gender: 'Male',
            dateOfBirth: '02 Aug 1999',
            stateOfResidence: 'Delta',
            repaymentEnds: '03 Dec 2022',
            bankName: 'First Bank',
            acctNumber: 9876543222,
            address: '23 Bank road',
            amountLoaned: '604,051',
            company: 'Company Insurance PLC',
            transactionDate: 'Jan 6, 2022',
            location: 'Mega Autoshop, Delta',
            vehicle: 'Ford',
            repaymentDuration: '6 months',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },

            ]
        },
        {
            id: '3054',
            name: 'Brown Lesley',
            number: 123451234,
            dateJoined: '06 jan, 2022',
            verified: 'Failed',
            dateOfBirth: '02 Feb 2000',
            status: 'Active',
            stateOfResidence: 'Rivers',
            bankName: 'Zenith Bank',
            gender: 'Male',
            repaymentEnds: '03 Dec 2022',
            transactionDate: 'Jan 6, 2022',
            acctNumber: 123456975656,
            address: '67 Market road',
            company: 'Company Insurance PLC',
            location: 'Mega Autoshop, Rivers',
            vehicle: 'Hilux',
            repaymentDuration: '6 months',
            amountLoaned: '404,051',
            amountPaid: '120,000',
            pendingPayment: [
                {
                    id: 0,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 1,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 2,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                },
                {
                    id: 3,
                    dateBorrowed: '21 Jul, 2021',
                    status: 'Overdue',
                    amount: '24,600'
                }
            ]
        },
    ],
    singleCustomer: {},
    singleFulfilment: {}
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.ADMIN_GET_SINGLE_CUSTOMER:
            return {
                ...state, singleCustomer: action.payload
            }
        case userTypes.ADMIN_GET_SINGLE_FULFILMENT:
            return {
                ...state, singleFulfilment: action.payload
            }
        default:
            return state
    }
}