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
