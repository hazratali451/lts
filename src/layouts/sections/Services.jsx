import styled from "styled-components";

import { Grid } from "../../components/Grid";

import Card from "../../../public/images/icons/card.svg";
import Lock from "../../../public/images/icons/lock.svg";
import Money from "../../../public/images/icons/money.svg";
import Security from "../../../public/images/icons/security.svg";
import Waves from "../../../public/images/illustrations/waves.png";

const Services = () => {
	return (
		<Style id="our-services">
			<div className="container">
				<h3>Our Services</h3>
				<Grid col={2} alignItems>
					<div>
						<h2>Best Payment Sevices for your Transaction </h2>
						<p>
							crambled it to make a type specimen book. It has survived
							not only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged lor ndustry.{" "}
						</p>
					</div>
					<Grid col={2} gapX={20} gapY={20} className="grid">
						<Service
							className="active"
							title={
								<>
									Keeping <br /> Secrecy
								</>
							}
							Icon={Security}
						/>
						<Service title="Free transaction free" Icon={Money} />
						<Service title="Security guaranteed" Icon={Lock} />
						<Service title="All in one Ultibank app" Icon={Card} />
					</Grid>
				</Grid>
			</div>
		</Style>
	);
};

export default Services;

const Style = styled.section`
	background-image: url(${Waves.src});
	background-repeat: no-repeat;
	background-size: 108vw;
	background-position: bottom;
	h3 {
		text-align: center;
		margin-bottom: min(100px, 10vw);
	}
	h2 {
		max-width: 500px;
		margin-bottom: 40px;
		line-height: 1.3;
		@media (min-width: 992px) {
			font-size: 55px;
		}
	}
	p {
		max-width: 520px;
	}
	@media (max-width: 768px) {
		text-align: center;
		background-size: 150%;
		h3 {
			margin-bottom: 40px;
		}
		h2 {
			margin-inline: auto;
		}
		p {
			margin-bottom: 30px;
			margin-inline: auto;
		}
		.grid {
			justify-content: center;
		}
	}
`;

const Service = ({ title, Icon, ...rest }) => {
	return (
		<ServiceStyle {...rest}>
			<Icon />
			<h5>{title}</h5>
		</ServiceStyle>
	);
};

const ServiceStyle = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 5px;
	border: 1px solid transparent;
	padding: 50px 20px;
	h5 {
		color: #606060;
		text-align: center;
		line-height: 30px;
		font-family: "SF-Pro Regular";
		margin-top: 30px;
	}
	:hover,
	&.active {
		background-color: rgba(128, 245, 212, 0.08);
		backdrop-filter: blur(2px);
		border-color: #80f5d4;
		transition: background-color 0.3s ease-in-out,
			border-color 0.3s ease-in-out;
		h5 {
			color: #ffffff;
			transition: color 0.5s ease-in-out;
		}
	}
	@media (max-width: 768px) {
		width: 300px;
		height: 280px;
		margin-right: auto !important;
		margin-left: auto;
	}
`;
