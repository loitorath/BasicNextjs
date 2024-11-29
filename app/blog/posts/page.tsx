export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog'); //pull data
    const posts = await data.json(); //convert data to json readable
    return(
        <ul>
            {posts.map((post:{id:number,title:string}) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}