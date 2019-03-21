import React, { Component } from 'react';
import Gradient from '../gradient';  


class Schedule extends Component {

    renderCourses() {
        const data = this.props.courses

        return data.map((course, index) => {
            if(course.enrolled) {
                return <ScheduleCourse {...course} key={index}/>
            }
        })
    }


    render() {
        return (
            <div className="Schedule">
                <h1 className="schedule__title">My Schedule</h1>
                { this.renderCourses() }
                <ProgressTracker/>
                <Gradient/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Schedule);