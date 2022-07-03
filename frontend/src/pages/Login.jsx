import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleTheme } from '../components';

function Login() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    //   console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <div>
      <section className="registerpage bg-5964E0 {-- h-screen --} dark:bg-121721">
        <div className="mx-auto h-screen flex justify-center tablet:items-center relative tablet:h-full border border-5964E0">
          <div className="absolute top-0 right-0 pt-2 mr-4">
            <svg width={200} height={144} xmlns="http://www.w3.org/2000/svg">
              <g className="fill-white dark:fill-5964E0" fillRule="evenodd">
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
          <div className="absolute bottom-5 right-0 pt-2 mr-4">
            <ToggleTheme />
          </div>
          <form
            id="login"
            className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-gray-800 mb-32 sm:mb-0 my-40 sm:my-12 px-6 sm:px-0"
            onSubmit={handleSubmit}
          >
            <div className="px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
              <img
                src="/assets/desktop/logo.svg"
                className="w-115 h-8"
                alt=""
              />
            </div>
            <div className="pt-16 px-2 flex flex-col items-center justify-center">
              <h3 className="text-heading-3 sm:text-heading-4 xl:text-heading-2 font-bold text-white leading-tight">
                Log in
              </h3>
            </div>
            <div className="mt-12 w-full sm:px-6">
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="email"
                  className="text-heading-3 font-semibold text-white leading-tight"
                >
                  Email
                </label>
                <input
                  required
                  name="email"
                  id="email"
                  className="h-10 px-2 caret-5964E0 bg-body-bg w-full rounded mt-2 text-19202D focus:outline-none focus:border-2 focus:border-5964E0 border shadow invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="email"
                />
              </div>

              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="text-heading-3 font-semibold text-white leading-tight"
                >
                  Password
                </label>
                <input
                  required
                  name="password"
                  id="password"
                  className="h-10 px-2 caret-5964E0 bg-body-bg w-full rounded mt-2 text-19202D focus:outline-none focus:border-2 focus:border-5964E0 border shadow invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  type="password"
                />
              </div>

              <div className="pt-6 w-full flex justify-between px-2 sm:px-0">
                <div className="flex items-center ">
                  <input
                    id="rememberme"
                    name="rememberme"
                    className="w-3 h-3 mr-2 bg-body-bg"
                    type="checkbox"
                  />
                  <label htmlFor="rememberme" className="text-body text-white">
                    Remember Me
                  </label>
                </div>
                <Link
                  to="/"
                  className="text-body text-white"
                  href="javascript: void(0)"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="mb-16 sm:mb-56 tablet:mb-16">
                <button className="focus:outline-none w-full bg-939BF4 dark:bg-5964E0 transition duration-150 ease-in-out dark:hover:bg-939BF4 rounded text-white px-8 py-3 text-heading-3 mt-6">
                  {loading ? (
                    <div className="mx-auto w-6 h-6 bg-121721 rounded-full flex animate-spin shadow-md">
                      <div className=" w-1/2 h-6 bg-white rounded-l-full"></div>
                      <div className=" w-1/2 h-6 bg-light-violet rounded-r-full"></div>
                    </div>
                  ) : (
                    'Login'
                  )}
                </button>
                <p className="mt-16 text-body text-center text-white">
                  Don&apos;t Have An Account?{' '}
                  <Link
                    to="/register"
                    className="underline text-white"
                    href="javascript: void(0)"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div className="absolute -bottom-0 left-0 pb-2 ml-4 hidden sm:block ">
            <svg width={200} height={144} xmlns="http://www.w3.org/2000/svg">
              <g className="fill-white dark:fill-5964E0" fillRule="evenodd">
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
