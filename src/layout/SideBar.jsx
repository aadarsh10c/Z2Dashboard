import { Link  } from 'react-router'
function SideBar() {
  return (
    <>
    <div>This is the main</div>
    <ul>
        <li><button><Link  to="/">Home</Link ></button></li>
        <li><button><Link  to="/part-risk-manager">Part Risk Manager</Link ></button></li>
        <li><button><Link  to="/part-risk-manager/my-data">My data</Link ></button></li>
        <li><button><Link  to="/part-risk-manager/close">Error</Link ></button></li>
    </ul>
    </>
  )
}

export default SideBar