import React from 'react';
import Slider from 'material-ui/Slider';

class SliderExampleSimple extends React.Component{

	render(){
		return(
		  <div>
		    <Slider value={3} min={1} max={10} step={1}  onChange={this.props.plusClick} ></Slider>
		  </div>
		)
	}
}

export default SliderExampleSimple;