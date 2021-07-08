import React from "react";

class VilleList extends React.Component {
    
    render() {
      const { villeInfo } = this.props;
      return (
        <div className="itemContainer">
          <div className="leftContainer">            
            <div className="itemDescription">
              <h3>{villeInfo.name}</h3>
            </div>
          </div>          
        </div>
      );
    }
  }
  
  export default VilleList;