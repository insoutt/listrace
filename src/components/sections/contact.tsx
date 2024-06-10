'use client'

import ApiService from "@/services/ApiService";
import { FormEvent, MouseEvent, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {

    try {
      setIsLoading(true);
      const {message} = await ApiService.createAccount(email);
      alert(message)
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(false);
    }

  }

  return (<>
    <section className="bg-gray-50 py-[150px]">
      <div className="container">
        <div className="mb-13 text-center">
          <h2>DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?</h2>
          <p className="mt-7 text-gray-500 font-[500]">Listrace offer you to list your business with us and we very much able to promote your Business.</p>
        </div>

        <div className="flex justify-center">
          <form className="relative" onSubmit={event => {
            event.preventDefault();
            submit();
          }}>
            <input
              value={email}
              onChange={event => setEmail(event.currentTarget.value)}
              type="text"
              placeholder="Enter your email here"
              name="email"
              className="h-15 w-75 sm:w-[630px] pl-[30px] border border-white focus:outline-none shadow-sm hover:shadow-lg duration-500"
            />
            <button onClick={event => {
              event.preventDefault();
              submit();
            }} disabled={isLoading} className="h-15 border bg-primary text-white py-2 w-[180px] hover:bg-red-500 absolute top-0 right-0 font-[500] disabled:opacity-75" type="submit">
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </section>
  </>);
}

export default Contact;