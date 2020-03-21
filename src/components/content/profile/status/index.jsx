import React from "react";
import style from './../profileInfo/profileDetail/index.module.scss'
class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    };
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    disableEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.setUserStatus(this.state.status);
    };
    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={style['user-info__status']}>
                {
                    !this.state.editMode &&
                    <span onDoubleClick={this.activeEditMode.bind(this)}>{this.state.status}</span>
                }
                {
                    this.state.editMode &&
                    <input onChange={this.changeStatus} autoFocus={true} onBlur={this.disableEditMode.bind(this)} value={this.state.status} type="text"/>
                }
            </div>
        )
    }

}

export default ProfileStatus