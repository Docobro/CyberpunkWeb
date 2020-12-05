import React from 'react'
import {
    NavLink
  } from "react-router-dom";


function List() {
    return (
        <div>
            <ul className="list">
              <li><NavLink to="/overview" className="listText" exact="true" activeClassName="listTextActive">-Overview-</NavLink></li>
              <li><NavLink to="/requiremets" className="listText" activeClassName="listTextActive">-Requirements-</NavLink></li>
              <li><NavLink to="/release" className="listText" activeClassName="listTextActive">-Relise Data-</NavLink></li>
            </ul>
        </div>
    );
}

export default List;