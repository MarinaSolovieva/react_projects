import React from "react";


class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.WeatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button className="btn btn-primary btn-lg" >Получить погоду</button>
            </form>
        );
    }
}

export default Form;