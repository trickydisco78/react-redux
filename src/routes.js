import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
    <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
<<<<<<< HEAD
    <Route path="/courses" component={CoursesPage} />
    <Route path="/about" component={AboutPage} />
=======
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841
    </Route>
);
