import { SET_REMINDER, DELETE_ONE_REMINDER, CLEAR_REMINDER } from "../constant";

const addReminder = (action) => {
    return {
        reminderText: action.reminderText,
        id: Math.random()
    }
}

const deleteReminder = (reminderArray, id) => {
    let finalReminder = reminderArray.filter((rem => rem.id !== id))
    return finalReminder;
}


const reminderReducer = (state = [], action) => {
    let reminders = [];

    switch (action.type) {
        case SET_REMINDER:
            reminders = [...state, addReminder(action)]
            return reminders;
        // return {
        //     ...state,
        //     remainder: addReminder(action)
        // }

        case DELETE_ONE_REMINDER:
            reminders = deleteReminder(state, action.id)
            return reminders;

        case CLEAR_REMINDER:
            reminders = []
            return { ...state }

        default:
            return state;
    }
}

export default reminderReducer;