export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();

  const ids = posts.slice(0, 6).map((post) => {
    return {
      id: post.id.toString(),
    };
  });
  console.log(ids);

  // return posts.slice(0, 6).map((post) => ({
  //   id: post.id + "",
  // }));
  return ids;
}

const PostDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  return (
    <div>
      This is Post details page : {params.id}
      <div className=" border shadow-lg border-gray-50 p-4">
        <h1 className="text-xl">{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.likeCount}</p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
