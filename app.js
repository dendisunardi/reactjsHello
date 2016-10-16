class Profile extends React.Component {
	render(){
		return <h1>Hello {this.props.name}</h1>;
	}
}

React.render(<Profile name="Dendi"/>, document.getElementById('app'));