import React from "react";
import axios from 'axios';


axios.interceptors.request.use(function(requestConfig){
    const token = localStorage.getItem('token');
    requestConfig.headers.authorization = token;
    return requestConfig;
})

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('token');
            const noToken = <h3>Log in to continue</h3>

            return <>{token ? <Component {...this.props}/>: noToken}</>
        }
    }
}