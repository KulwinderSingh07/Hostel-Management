const Admindashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <ul className="navbar-nav mr-auto">
          <h1 className="userdashboardheading">Admin Dashboard</h1>
          <li className="nav-item active">
            <a className="nav-link" href="/admin/leave">
              Leave Applicants
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/complaint">
              Complaints
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/menu">
              Mess Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/allaplicants">
              Applicants
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Admindashboard;
