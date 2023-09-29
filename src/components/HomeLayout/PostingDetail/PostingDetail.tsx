import { useSelector } from "react-redux";


const PostingDetail = () => {

    const jobData = useSelector((state) => state.job)

    console.log('jobData', jobData);

    return (
        <div>
            PostingDetail
        </div>
    )
}

export default PostingDetail;