import React from "react";
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';

const { Content } = Layout;

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

class MainPage extends React.Component {

    render() {
        const { message } = this.props
        const name = 'Josh Perez';
        return (
            <h1>Hello, {name}</h1>
        )
    }
}

export default MainPage;