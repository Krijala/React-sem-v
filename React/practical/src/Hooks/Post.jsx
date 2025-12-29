
const postdata =async (data) => {
    const res = await fetch("",{
        method: "POST",
        body: data
    })
}

const Post = () => {
    return (
        <div>Post</div>
    )
}

export default Post
