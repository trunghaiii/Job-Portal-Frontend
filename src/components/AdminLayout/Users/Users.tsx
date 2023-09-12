import { useEffect, useState } from "react"
import UserTable from "./UserTable/UserTable"
import { getSearchUsersPagination } from "../../../services/api"
import TableHeader from "./TableHeader/TableHeader"


const Users = () => {

    const [userData, setUserData] = useState<any>([])

    const [total, setTotal] = useState<number>(0)
    const [current, setCurrent] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)

    const fetchUserData = async () => {

        // 1. build query string
        let queryString: string = `page=${current}&limit=${limit}`

        // 2. call api
        const response = await getSearchUsersPagination(queryString)

        if (response && response.statusCode === 200) {

            setTotal(response.data.meta.total)
            setUserData(response.data.result)
        }

    }
    useEffect(() => {
        fetchUserData();
    }, [current])

    return (
        <div className="user-container">
            <TableHeader />
            <UserTable
                userData={userData}
                setCurrent={setCurrent}
                current={current}
                limit={limit}
                total={total}
            />
        </div>
    )
}

export default Users