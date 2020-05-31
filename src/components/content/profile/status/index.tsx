import React, {ChangeEvent} from "react";
import style from './../profileInfo/profileDetail/index.module.scss'

type PropsType = {
    status: string,
    setUserStatus: (status: string) => void
}
type StateType = {
    editMode: boolean,
    status: string
}

class ProfileStatusClass extends React.Component<PropsType, StateType>{
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
    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    };
    componentDidUpdate(prevProps:PropsType, prevState:StateType) {
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
                    <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status || '-----'}</span>
                }
                {
                    this.state.editMode &&
                    <input onChange={this.changeStatus} autoFocus={true} onBlur={this.disableEditMode.bind(this)} value={this.state.status} type="text"/>
                }
            </div>
        )
    }

}

export default ProfileStatusClass