import styled from "styled-components";
import Consultation from "../../../public/images/icons/consultation.svg";
import Development from "../../../public/images/icons/development.svg";
import Maintance from "../../../public/images/icons/maintance.svg";
import Restart from "../../../public/images/icons/restart.svg";
import { Grid } from "../../components/Grid";

const HowItWorks = () => {
	return (
		<Style id="how-we-work">
			<div className="container">
				<h3 data-aos-duration="600" data-aos="flip-up">How It Works</h3>
				<Grid data-aos="flip-up" data-aos-duration="600" col={4} gapX={10} gapY={60} className="grid">
					<Card
						step={1}
						Icon={Consultation}
						title="Consultation"
						text="crambled it to make a type specimen book. It has survived not only five centuries, but also"
					/>
					<Card
						step={2}
						Icon={Development}
						title="Development"
						text="crambled it to make a type specimen book. It has survived not only five centuries, but also"
					/>
					<Card
						step={3}
						Icon={Restart}
						title="Test"
						text="crambled it to make a type specimen book. It has survived not only five centuries, but also"
					/>
					<Card
						step={4}
						Icon={Maintance}
						title="Maintance"
						text="crambled it to make a type specimen book. It has survived not only five centuries, but also"
					/>
				</Grid>
			</div>
		</Style>
	);
};

export default HowItWorks;

const Style = styled.section`
	h3 {
		text-align: center;
		margin-bottom: min(100px, 10vw);
	}
	.grid {
	}
`;

const Card = ({ step, Icon, title, text }) => {
	return (
		<CardStyle>
			<article>
				<span>{step}</span>
				<Icon />
				<h6>{title}</h6>
				<p>{text}</p>
			</article>
		</CardStyle>
	);
};

const CardStyle = styled.div`
	article {
		margin-inline: auto;
		background-color: #101010;
		border: 1px solid #383838;
		padding: 15px 8px;
		padding-top: 50px;
		border-radius: 8px;
		text-align: center;
		position: relative;
		max-width: 253px;
	}
	span {
		position: absolute;
		background-color: #101010;
		border: 1px solid #383838;
		width: 70px;
		height: 70px;
		border-radius: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		top: -35px;
		left: 50%;
		transform: translateX(-50%);
	}
	svg {
		margin-bottom: 15px;
		margin-inline: auto;
	}
	h6 {
		margin-bottom: 8px;
		font-size: 18px;
	}
	p {
		font-size: 15px;
	}
`;
