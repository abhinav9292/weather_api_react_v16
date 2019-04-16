import React, {Component} from 'react';


class Form extends Component{

    handleSubmit = (e) => {

    }

    render() {
        return(
            <form onSubmit={this.props.getWeather}>

                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="country..."/>
                <button className="btn btn-primary"> Submit </button>


            </form>
        )
    }
}

export default Form;