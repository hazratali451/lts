import styled from "styled-components";

import Waves from "../../../public/images/illustrations/waves3.png";

import Apple from "../../../public/images/icons/apple.svg";
import Aws from "../../../public/images/icons/aws.svg";
import Microsoft from "../../../public/images/icons/microsoft.svg";
import Tesla from "../../../public/images/icons/tesla.svg";
import Youtube from "../../../public/images/icons/youtube.svg";

const Customers = () => {
	return (
		<Style id="our-customers">
			<div className="w-100">
				<div className="container">
					<h3>Our Customers</h3>
					<h2>Our customers Lorem Ipsum</h2>
					<p>
						crambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged lor ndustry.{" "}
					</p>
				</div>
				<div className="partners">
					<Apple />
					<Microsoft />
					<Tesla />
					<Aws />
					<Youtube />
				</div>
			</div>
		</Style>
	);
};

export default Customers;

const Style = styled.section`
	text-align: center;
	background-image: url(${Waves.src});
	background-repeat: no-repeat;
	background-size: 140vw 86vw;
	background-position: 58% center;
	h3 {
		margin-bottom: min(100px, 10vw);
	}
	.w-100 {
		width: 100%;
	}
	h2 {
		margin-bottom: 25px;
	}
	p {
		max-width: 760px;
		margin-left: auto;
		margin-right: auto;
	}
	.partners {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 100px;
		flex-wrap: wrap;
		width: 100%;
		padding: 0 15px;
		> * {
			margin-inline: 15px;
			margin-bottom: 30px;
		}
		@media (max-width: 768px) {
			margin-top: 50px;
			justify-content: flex-start;
			* {
				flex: 1 1 220px;
			}
		}
	}
	@media (max-width: 768px) {
		background-size: 330vw;
		background-position: center 60%;
	}
`;
