
import React from 'react';
import CompanyTable from './CompanyTable/CompanyTable';
import TableHeader from './TableHeader/TableHeader';
import Searching from './Searching/Searching';

interface DataType {
    //key: React.Key;
    id: string;
    name: string;
    actions: string;
}

const Companies = () => {


    const companyData: DataType[] = [
        {
            //  key: '1',
            id: 'hsdfhsdfhds',
            name: "Hai",
            actions: "dd"
        },
        {
            //  key: '1',
            id: 'hsdfhsdfhds',
            name: "Hai 2",
            actions: "dd"
        },
    ];



    return (
        <div>
            <Searching />
            <TableHeader />
            <CompanyTable
                companyData={companyData}
            />
        </div>
    )
}

export default Companies