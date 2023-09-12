import { useEffect, useState } from "react"
import UserTable from "./UserTable/UserTable"
import TableHeader from "./TableHeader/TableHeader"
import Searching from "./Searching/Searching"

import { getSearchUsersPagination } from "../../../services/api"



const Users = () => {

    const [userData, setUserData] = useState<any>([])

    const [total, setTotal] = useState<number>(0)
    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)

    const [nameSearchString, setNameSearchString] = useState<string>("")

    const fetchUserData = async () => {

        // 1. build query string
        let queryString: string = `page=${current}&limit=${limit}&name=/${nameSearchString}/i`

        // 2. call api
        const response = await getSearchUsersPagination(queryString)

        if (response && response.statusCode === 200) {

            setTotal(response.data.meta.total)
            setUserData(response.data.result)
        }

    }
    useEffect(() => {
        fetchUserData();
    }, [current, nameSearchString])

    return (
        <div className="user-container">
            <Searching
                setNameSearchString={setNameSearchString}
                setCurrent={setCurrent}
            />
            <TableHeader
                fetchUserData={fetchUserData}
            />
            <UserTable
                userData={userData}
                setCurrent={setCurrent}
                current={current}
                limit={limit}
                total={total}
                fetchUserData={fetchUserData}
            />
        </div>
    )
}

export default Users