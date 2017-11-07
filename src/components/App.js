import React, {Proptypes} from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.Proptypes = {
  children: Proptypes.object.isRequired
};

export default App;