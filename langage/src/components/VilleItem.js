import React from "react";
import Compteur from "./Compteur"

class VilleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            villeFavori: this.props.villeInfo.villeFavori,
        };
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
    }

    handleClickFavorite() {
        const { villeFavori } = this.state;
        this.setState({
            villeFavori: !villeFavori,
        });
    }

    render() {
        const {villeInfo} = this.props;
        return (
            <div className="container-fluid card ml-5 pt-3 pb-3 mb-3">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid pb-5">
                            <div className="row">
                                <div className="col-4">
                                    <h3>{villeInfo.name} </h3>                                    
                                </div>                                
                                <div className="col-4">
                                    <Compteur/>
                                </div>
                                <div className="col-4">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 pb-5">                                    
                                    <h4>{villeInfo.description} </h4>
                                </div>
                                <div className="col-12 pb-3">                                    
                                    <h4 className="text-center">{villeInfo.icon} </h4>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default VilleItem;