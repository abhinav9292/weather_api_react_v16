import React, {Component} from 'react';


class Weather extends Component{
    render() {
        return(
            <div>
                 {this.props.temperature && <p> { this.props.temperature } </p> }
                 {this.props.city && this.props.city && <p> { this.props.city}, {this.props.country  } </p> }
                {this.props.lat && <p> { this.props.lat } </p> }
                 {this.props.lon && <p> { this.props.lon } </p> }
                {this.props.error && <p> { this.props.error } </p> }

            </div>
        )
    }
}

export default Weather;