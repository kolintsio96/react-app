import React from "react";
import style from './../profileInfo/profileDetail/index.module.scss'
class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    };
    toggleEditMode(){
        this.setState({
            editMode: !this.state.editMode
        })
    }
    changeStatus(value){
        this.setState({
            status: value
        })
    }
    render() {
        return (
            <div className={style['user-info__status']}>
                {
                    !this.state.editMode &&
                    <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.state.status}</span>
                }
                {
                    this.state.editMode &&
                    <input onChange={(e) => {this.changeStatus(e.target.value)}} autoFocus={true} onBlur={this.toggleEditMode.bind(this)} value={this.state.status} type="text"/>
                }
            </div>
        )
    }

}

export default ProfileStatus