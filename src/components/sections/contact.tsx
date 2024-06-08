
const Contact = () => {
  return (<>
    <section className="bg-gray-50 py-[150px]">
      <div className="container">
        <div className="mb-13 text-center">
          <h2>DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?</h2>
          <p className="mt-7 text-gray-500 font-[500]">Listrace offer you to list your business with us and we very much able to promote your Business.</p>
        </div>

        <div className="flex justify-center">
          <form className="relative">
            <input type="text" placeholder="Enter your email here" name="email" className="h-15 w-75 sm:w-[630px] pl-[30px] border border-white focus:outline-none shadow-sm hover:shadow-md duration-500" />
            <button className="h-15 border bg-primary text-white py-2 w-[180px] hover:bg-red-500 absolute top-0 right-0 font-[500]" type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </section>
  </>);
}

export default Contact;