import Link from "next/link";

const PostPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    // next: {
    //   revalidate: 10,
    // },
    cache: "no-store",
  });
  const post = await res.json();
  //   console.log(post);
  return (
    <div>
      Total Post: {post.length}
      <div className="card shadow rounded  grid grid-cols-3 gap-4">
        {post.map((post) => (
          <div key={post.id}>
            {/* card */}
            <Link href={`/post/${post.id}`}>
              <div className=" border shadow-lg border-gray-50 p-4">
                <h1 className="text-xl">{post.title}</h1>
                <p>{post.description}</p>
                <p>{post.likeCount}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
