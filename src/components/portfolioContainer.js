import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Navigation";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Project from "../pages/Projects";

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("Home");
	const renderPage = () => {
		if (currentPage === "Home") {
			return <Home />;
		}
		if (currentPage === "Projects") {
			return <Project />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
	};
	const handlePageChange = (page) => setCurrentPage(page);
	return (
		<div>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			

			{renderPage()}
			<Footer />
		</div>
	);
}
