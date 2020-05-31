import friendPhoto from "../img/friend.jpg";
import friendPhoto1 from "../img/friend1.png";
import friendPhoto2 from "../img/friend2.png";

let sidebarLinks = [
        {
            id: 1,
            title: 'Profile',
            url: '/profile'
        },
        {
            id: 2,
            title: 'Messages',
            url: '/messages'
        },
        {
            id: 3,
            title: 'Users',
            url: '/users'
        }
    ],
    sidebarFriends = [
        {
            id: 1,
            name: 'Andrew',
            photoUrl: friendPhoto
        },
        {
            id: 2,
            name: 'Igor',
            photoUrl: friendPhoto1
        },
        {
            id: 3,
            name: 'Vlad',
            photoUrl: friendPhoto2
        }
    ];
type SidebarLinksType = {
    id: number,
    title: string | null,
    url: string | null
}
type SidebarFriendsType = {
    id: number,
    name: string | null,
    photoUrl: string | null
}
export type InitialStateType = typeof initialState;
let initialState = {
    links: sidebarLinks as Array<SidebarLinksType>,
    friends: sidebarFriends as Array<SidebarFriendsType>
};


let sidebarReducer = (state = initialState): InitialStateType => {
    return {
        ...state
    }
}
export default sidebarReducer;