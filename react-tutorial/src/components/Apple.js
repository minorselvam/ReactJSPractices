import React from "react";

class Apple extends React.Component {
    render() {
        const {appleDetails} =this.props;
        const {appleType, appleRate} = appleDetails;

        return (
            <h1>I am a {appleType} Apple. And the rate is {appleRate}!</h1>
        )
    }
}

export default Apple;