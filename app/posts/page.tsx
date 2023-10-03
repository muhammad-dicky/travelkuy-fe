import Link from "next/link";
import ViewUserButton from "../components/Posts/ViewUserButton";
import CardList from "../components/Posts/CardList";
import { Interface } from "readline";

const base_url = "https://jsonplaceholder.typicode.com/posts";
interface Ipost {
    userId: number,
    id: number,
    title: string,
    body: string,

}

const Posts = async () => {
    const response = await fetch(base_url, {
        cache: "no-store"
    });
    const posts: Ipost[] = await response.json();
    return (
        <>
            <h1>ini halaman post</h1>
            <Link href="/">Kembali ke halaman Index</Link>
            <br />
            {posts.map((post) => {
                return (
                    <CardList key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <ViewUserButton userId={post.userId} />
                    </CardList>
                )
            })}
            <br />
            <CardList />
            <br />
        </>
    )
}

export default Posts;