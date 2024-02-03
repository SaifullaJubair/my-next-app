const ProductDynamicPage = ({ params, searchParams }) => {
  // console.log(params);
  console.log(searchParams);
  return (
    <div>
      This is product dynamic page: {params.id}
      <div>
        <h1>Search Params</h1>
        <h2>Search by: {searchParams.category}</h2>
      </div>
    </div>
  );
};

export default ProductDynamicPage;
