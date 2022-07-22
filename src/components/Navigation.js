import React from "react";

function Navigation({ currentPage, handlePageChange }) {
	return (
		<ul className="nav nav-tab">
			<li className="nav-item">
				<a
					href="About"
					onClick={() => handlePageChange("About")}
					className={currentPage === "About" ? "nav-link active" : "nav-link"}
				>
					About
				</a>
			</li>
			<li className="nav-item">
				<a
					onClick={() => handlePageChange("Projects")}
					className={
						currentPage === "Projects" ? "nav-link active" : "nav-link"
					}
				>
					Projects
				</a>
			</li>
			<li className="nav-item">
				<a
					onClick={() => handlePageChange("Contact")}
					className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
				>
					Contact me
				</a>
			</li>
			<li className="nav-item">
				<a
					onClick={() => handlePageChange("Resume")}
					className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
				>
					Resume
				</a>
			</li>
		</ul>
	);
}
export default Navigation;
