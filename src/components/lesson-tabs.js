import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId  !== "undefined"){
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

    return(<div>
        <h2>Lesson Tabs</h2>
        <ul className="nav nav-pills wbdv-editor-nav-pills">
            {
                lessons.map((lesson) =>
                    <li className = "nav-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}
                            active={lesson._id === lessonId}
                        />
                    </li>
                )
            }
            <li onClick={() => createLessonForModule(moduleId)} className="ml-2 btn btn-primary fa fa-plus" style={{float:"right"}}/>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {

        console.log("load lessons for module")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId).then(lessons => dispatch({
            type:"FIND_LESSONS",
            lessons
        }))
    },
    createLessonForModule: (moduleId) => {
        console.log("create lesson for module")
        lessonService.createLessonForModule(moduleId, {title:"new lesson"})
            .then(lesson => dispatch({
                type:"CREATE_LESSON",
                lesson
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)
