
import React from "react";
import Resume from '../components/resume';

export default class Resumeds {
	handleRoute(next) {
		// Kick off data requests here.
		return next();
	}
	getTitle() {
		return "Jennifer Haggerty's Resume'";
	}
	getHeadStylesheets() {
		return [
				"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
		]
	}
	getElements() {
		return <Resume />
	}
}
