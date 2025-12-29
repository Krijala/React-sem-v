
const postdata =async (data) => {
    const res = await fetch("",{
        method: "POST",
        body: data
    })
}

const Post = () => {
    return (
        <div>Posts</div>
    )
}

export default Post
