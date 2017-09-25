
import React from "react";
import Contact from '../components/contact';

export default class ContactPage {
	handleRoute(next) {
		// Kick off data requests here.
		return next();
	}
	getTitle() {
		return "Contact Jennifer Haggerty";
	}
	getHeadStylesheets() {
		return [
				"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
		]
	}
	getElements() {
		return <Contact />
	}
}
