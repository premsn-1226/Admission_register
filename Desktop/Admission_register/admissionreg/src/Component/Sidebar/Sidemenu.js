import {Component} from 'react'
import {SidebarData} from './SidebarData'
import './Sidemenu.css'
class Sidemenu extends Component{
    render(){
        return(
          <div className="navigation">
            <ul>
              {SidebarData.map((val, key) => {
                return (
                  <li key={key}>
                    <a href={val.link} className={window.location.pathname === val.link ? "active" : ""}>
                    <div className="icon"><i className={val.icon}></i></div> 
                    <div className="title">{val.title}</div>
                    </a>
                  </li>
                );
              })}
            </ul>
            
          </div>
        )
    }
}

export default Sidemenu