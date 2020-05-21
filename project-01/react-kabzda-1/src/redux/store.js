import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It is my first post', likesCount: 12},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo-Yo'},
                {id: 4, message: 'Yo-Yo'},
                {id: 5, message: 'Yo-Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Person-1'},
                {id: 2, name: 'Person-2'},
                {id: 3, name: 'Person-3'},
                {id: 4, name: 'Person-4'},
                {id: 5, name: 'Person-5'},
                {id: 6, name: 'Person-6'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },

    _callSubscriber () {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer (this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;




