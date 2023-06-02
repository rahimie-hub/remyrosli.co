import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import { RouteList } from '../../containers/Routes';
import { withRouter } from "react-router-dom";
import { menuList } from '../../designs/Sidebar/Sidebar';

const Crumbs = (props) => {
    let crumbsUI = null;
    const [crumbList, setCrumbList] = useState([{
        name: '',
        route: '',
    }]);

    useEffect(() => {
        console.log('[Crumbs.js] useEffect - > ', props.location.pathname);
        RouteList.map(function (route) {
            var result;
            var firstCrumb;
            var secondCrumb;
            var thirdCrumb;
            var getArray=[];

            if (props.location.pathname === "/") {
                // firstCrumb = JSON.parse(localStorage.getItem('localCrumb'))
                result = []
                setCrumbList(result)
            }else{
                menuList.forEach((activity) => {
                    // console.log(activity.sub);
                    activity.sub.forEach((data) => {
                        // console.log(data);
                        getArray.push(data)
                    });
                    // const findById = (e, id) => {
                    //     for (let o of e) {
                    //         return (o.key == id) ? o : findById(o.children, id);
                    //     }
                    // }
                });
            }
                const filter_data = getArray.find(item => item.route === props.location.pathname)
                // console.log(filter_data);
            // }

            // if (props.location.pathname === route.path) {
            //     if (route.main) {
            //         firstCrumb = { name: route.name, route: route.path }
            //         localStorage.setItem('localCrumb', JSON.stringify({ name: route.name, route: route.path }))
            //         result = [firstCrumb]
            //     } else {
            //         firstCrumb = JSON.parse(localStorage.getItem('localCrumb'))
            //         secondCrumb = { name: route.name, route: route.path }
            //         result = [firstCrumb, secondCrumb];
            //     }

            //     setCrumbList(result)
            // }
            if(filter_data === undefined){

            }
            else if (props.location.pathname === filter_data.route) {
                if (route.main) {
                    firstCrumb = { name: filter_data.name, route: filter_data.route }
                    localStorage.setItem('localCrumb', JSON.stringify({ name: filter_data.name, route: filter_data.route }))
                    result = [firstCrumb]
                } else {
                    firstCrumb = JSON.parse(localStorage.getItem('localCrumb'))
                    secondCrumb = { name: filter_data.name, route: filter_data.route }
                    result = [firstCrumb, secondCrumb];
                }

                setCrumbList(result)
            }
            // else {
            //     // firstCrumb = { name: "Kumpulan Wang", route: "/" }
            //     // result = [firstCrumb]
            //     // setCrumbList(result)
            //     console.log("TEST!")
            // }
            return console.log;
        });
    }, [props.location.pathname]);

    crumbsUI = <React.Fragment>
        {crumbList.map((crumb, i) => (
            <React.Fragment key={i}>
                {crumb.name !== '' ? (
                    <li className="breadcrumb-item">
                        {crumb.route !== '' ? (
                            <Link to={crumb.route} className="crumb" onClick={() => { localStorage.setItem('sbState', 0) }}>{crumb.name}</Link>
                        ) :
                            <span className="crumb">{crumb.name}</span>
                        }
                    </li>
                ) : null}
            </React.Fragment>
        ))}
    </React.Fragment>;

    return (
        <Breadcrumb>
            <li className="breadcrumb-item">
                <Link to="/" className="crumb" onClick={() => { localStorage.setItem('sbState', 0) }}>Dashboard</Link>
                {/* <Link to="/" className="crumb" onClick={() => { localStorage.setItem('sbState', 0) }}>Kumpulan Wang</Link> */}
            </li>
            {crumbsUI}
        </Breadcrumb>
    )
}

export default withRouter(Crumbs);
