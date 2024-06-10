
const FetchError = () => {
  return (<>
    <div className="text-center text-red-500 bg-red-50 rounded p-4 max-w-lg mx-auto">
      <h3 className="text-xl font-bold">Whoops!</h3>
      <p className="text-sm">There was an error getting the request, please reload the page.</p>
    </div>
  </>);
}

export default FetchError;