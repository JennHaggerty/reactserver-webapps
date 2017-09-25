
import React from "react";
import Projects from '../components/projects';

export default class BlogPage {
	handleRoute(next) {
		// Kick off data requests here.
		return next();
	}
	getTitle() {
		return "Projects by Jennifer Haggerty";
	}
	getHeadStylesheets() {
		return [
				"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
		]
	}
	getElements() {
		return <Projects />
	}
}
