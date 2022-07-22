import Navigation from "./Navigation";

const Header = ({currentPage, handlePageChange}) => {
	return (
		<header className="bg-primary text-light mb-4 py-3 flex-row align-center">
		
				<h1 className="m-0">Zane Pisano</h1>
				<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
		
		</header>
	);
};

export default Header;
