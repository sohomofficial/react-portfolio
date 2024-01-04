import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact Me
          </p>
        </div>
        <form
          action=""
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  required
                  id="message"
                  rows={4}
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="btn btn-outline text-sm w-full">
              Send it
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
