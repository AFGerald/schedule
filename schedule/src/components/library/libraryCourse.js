import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label classname="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                <div className="library-course__description">
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim congue libero. Donec turpis justo, feugiat a mauris ut, dictum euismod erat.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;