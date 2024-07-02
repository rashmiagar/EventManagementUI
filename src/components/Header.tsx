function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">EventManagement </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="navbar-end flex gap-4">
        <button 
          className="link link-error no-underline"
          onClick={()=>document.getElementById('login_modal').showModal()}
        >
            Log In
        </button>
        <button
          className="btn btn-primary text-primary-content rounded-md text-white"
          onClick={()=>document.getElementById('signup_modal').showModal()}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
