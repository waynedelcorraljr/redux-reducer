export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            const newFriend = action.friend
            return {friends: [...state.friends, newFriend]}
        case 'REMOVE_FRIEND':
            const new_friends = state.friends.filter(friend => friend.id !== action.id)
            return {friends: new_friends}
        default:
            return state
    }
}
