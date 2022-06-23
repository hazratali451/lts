import { useState } from "react";
import { PopupButton } from "react-calendly";
import styled from "styled-components";
import Building from "../../../public/images/illustrations/building.svg";
import { Grid } from "../../components/Grid";

// TODO: scroll to section
const Hero = () => {
	const [isWork, setIsWork] = useState(false)

	setTimeout(() => {
		setIsWork(true)
	}, 1000)
	return (
		<Style id="home">
			<div className="shapes"></div>
			<div className="container">
				<Grid gapX={10} gapY={10} className="text">
					<div data-aos="fade-up" data-aos-duration="600" className="content">
						<h1>
							Established fact that a reader will be distracted by the
							readable
						</h1>
						<p>
							simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry&apos;s standards
						</p>
						{isWork ? <PopupButton
							url="https://calendly.com/lyncktechsolutions/consultation"
							rootElement={document.getElementById("__next")}
							text="Book a call"
						/> : <button>Book a call</button>}
					</div>
					<div className="illus">
						<Building />
					</div>
				</Grid>
			</div>
		</Style>
	);
};

export default Hero;

const Style = styled.section`
	.shapes {
		background-image: url("/images/illustrations/bg.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 0;
		left: calc(50% - 400px);
		right: 0;
		bottom: 0;
	}
	.container {
		position: relative;
		z-index: 2;
	}
	h1 {
		margin-bottom: 40px;
		font-weight: 400;
		@media screen and (min-width: 1200px) {
			font-size: 68px;
		}
	}
	p {
		margin-bottom: 4vw;
		max-width: 450px;
	}
	.content {
		width: 100%;
		max-width: 789px;
		margin-right: 0;
	}
	.illus {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (min-width: 768px) {
		.text {
			grid-template-columns: 1.5fr 1fr;
		}
	}
	@media (max-width: 768px) {
		text-align: center;
		background-position: center bottom;
		background-size: 190vw;
		svg {
			margin-top: -500px;
			transform: scale(0.8);
		}
		p {
			margin-bottom: 350px;
			margin-left: auto;
			margin-right: auto;
		}
	}
`;
