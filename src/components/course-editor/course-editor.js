import React from 'react'
import {Link} from 'react-router-dom'
import './course-editor.css';
// const CourseEditor = ({course, lastModified, owner}) => {
//     return (
//     <tr>
//         <input placeholder="Edit Title"/>
//         <td>{owner}</td>
//         <td>{lastModified}</td>
//         <td>
//             <div>
//                 <i class="fas fa-check"></i>
//                 <i class="fas fa-times"></i>
//             </div>
//         </td>
//     </tr>
//     )
// }

// const CourseEditor = ({props}) => 
const CourseEditor = ({history}) =>
    <div>
        <h1>Hello from CouresEditor</h1>
        <h2>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left float-left btn btn-primary"></i>
            </Link>
            {/* <i onClick={() => props.history.goBack()} 
                className="fas fa-times float-right">
            </i> */}
            <i onClick={() => history.goBack()}
                className="btn btn-primary fas fa-times float-right">
            </i>
        </h2>


        <div style={{ height: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className="fa fa-window-close" />  CS5610</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Build</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Themes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Settings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                                    <i className="fa fa-plus" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row wbdv-content-row">
                <div className="col-md-2 wbdv-editor-left-pane">
                    <ul className="list-group wbdv-module-list">
                        <li className="list-group-item active">
                            Module 1 - JQuery
                <i className="pull-right fa fa-times wbdv-list-delete-icon" />
                        </li>
                        <li className="list-group-item">
                            Module 2 - React
                <i className="pull-right fa fa-times wbdv-list-delete-icon" />
                        </li>
                        <li className="list-group-item">
                            Module 3 - Redux
                <i className="pull-right fa fa-times wbdv-list-delete-icon" />
                        </li>
                        <li className="list-group-item">Module 4 - Native
                <i className="pull-right fa fa-times wbdv-list-delete-icon" />
                        </li>
                        <li className="list-group-item">Module 5 - Angular
                <i className="pull-right fa fa-times wbdv-list-delete-icon" />
                        </li>
                        <li className="list-group-item">Module 6 - Node
                <i className="pull-right fa fa-times wbdv-list-delete-icon" />
                        </li>
                        <li className="list-group-item">Module 7 - Mongo
                <i className="pull-right fa fa-times wbdv-list-delete-icon" />
                        </li>
                        <li className="list-group-item wbdv-group-item-add">New Module
                <i className="pull-right fa fa-plus wbdv-list-delete-icon" />
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 wbdv-editor-content">
                    <ul className="nav nav-pills wbdv-editor-nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                                Topic 5
                  <i className="fa fa-lock" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>



export default CourseEditor