const initialState = {
    lessons: [
        {title: 'Lesson 1', _id: '123'},
        {title: 'Lesson 2', _id: '234'},
        {title: 'Lesson 3', _id: '345'},
        {title: 'Lesson 4', _id: '345'},
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS":
            return{
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "DELETE_LESSON":
        case "UPDATE_LESSON":
        default:
            return state
    }
}

export default lessonReducer