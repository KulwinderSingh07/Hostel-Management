const Mainpage = () => {
  document.body.style.backgroundColor = "#232B2B";
  return (
    <div className="User-definer">
      <h1>CHOSE THE MODE OF LOGIN</h1>
      <button>
        <a href="/useroptions">User</a>
      </button>
      <button>
        <a href="/adminlogin">Admin</a>
      </button>
    </div>
  );
};

export default Mainpage;
