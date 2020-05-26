import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../sassets/images/404-page';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound}  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;