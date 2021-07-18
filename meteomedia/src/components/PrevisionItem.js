import React from "react"

class PrevisionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevision: this.props.previsionInfo.prevision,
        };
        this.handleClickPrevision = this.handleClickPrevision.bind(this);
    }

    handleClickPrevision() {
        const { prevision } = this.state;
        this.setState({
            prevision: !prevision,
        });
    }

    render() {
        const {previsionInfo} = this.props;
        const {prevision} = this.state;
        return (
            <div>
                <button onClick={this.handleClickPrevision} className= {prevision ? "prevision" : "pasPrevision"}>
                    Voir la Météo
                </button>
                <p>{previsionInfo.coord}</p>
            </div>
        );
    }
}

export default PrevisionItem;