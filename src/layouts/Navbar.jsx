import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import styled from "styled-components";

import Logo from "../../public/images/brand/logo.png";

const Navbar = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 100);
		});
		return () => {
			setScroll(false);
			window.removeEventListener("scroll", () => { });
		};
	}, []);
	const [isWork, setIsWork] = useState(false)

	setTimeout(() => {
		setIsWork(true)
	}, 1000)
	return (
		<Style className={scroll ? "scroll" : ""}>
			<div className="container">
				<a href="#home" className="brand">
					<img src={Logo.src} alt="" />
				</a>
				<Links>
					<a href="#home">Home</a>
					<a href="#our-services">Our services</a>
					<a href="#how-we-work">How we work</a>
					<a href="#our-customers">our customers</a>
					{isWork ? <PopupButton
						url="https://calendly.com/lyncktechsolutions/consultation"
						rootElement={document.getElementById("__next")}
						text="Book a call"
					/> : <button>Book a call</button>}
				</Links>
			</div>
		</Style>
	);
};

export default Navbar;

const Style = styled.nav`
	position: sticky;
	z-index: 9;
	top: 0;
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #000000;

	.container {
		display: flex;
		align-items: center;
	}
	@media (max-width: 768px) {
		padding-top: 15px;
		padding-bottom: 15px;
		.brand {
			width: 146px;
			margin-right: 15px;
			flex: 1;
		}
	}
`;
const Links = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	a {
		white-space: nowrap;
		padding: 5px;
		line-height: 30px;
		@media screen and (min-width: 1200px) {
			padding: 5px 15px;
		}
		:not(.btn) {
			font-weight: 500;
			font-size: 16px;
			border-radius: 5px;
			text-transform: capitalize;
			margin-right: 14px;
			color: #969696;
		}
		&:hover {
			color: #fff;
		}
	}
	@media (max-width: 992px) {
		a.btn {
			min-width: auto;
		}
	}
	@media (max-width: 768px) {
		flex: 1;
		a {
			:not(.btn) {
				display: none;
			}
			&.btn {
				min-width: 120px;
				font-size: 16px;
				width: 100%;
			}
		}
	}
`;
