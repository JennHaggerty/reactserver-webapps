
import React from "react";
import About from '../components/about';

export default class AboutPage {
	handleRoute(next) {
		// Kick off data requests here.
		return next();
	}
	getTitle() {
		return "Jennifer Haggerty, a Full Stack Web Developer";
	}
	getHeadStylesheets() {
		return [
				"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
		]
	}
	getElements() {
		return <About />
	}
}
