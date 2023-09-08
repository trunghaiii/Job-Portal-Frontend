
import React from 'react';
import CompanyTable from './CompanyTable/CompanyTable';

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

            <CompanyTable
                companyData={companyData}
            />
        </div>
    )
}

export default Companies