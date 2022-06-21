import Image from "next/image";
import styled from "styled-components";
import Building from "../../../public/images/illustrations/building2.png";
import Waves from "../../../public/images/illustrations/waves2.png";
import { Grid } from "../../components/Grid";

const WhoWeAre = () => {
	return (
		<Style id="who-we-are">
			<div className="container">
				<h3>Who We Are</h3>
				<Grid col={2} alignItems>
					<div className="illus">
						<Image
							className="image"
							src={Building}
							alt="Who we are"
							width={590}
							height={456}
						/>
					</div>
					<div>
						<h2>
							Printing and typesetting industry has been industry’s
							standard
						</h2>
						<p>
							crambled it to make a type specimen book. It has survived
							not only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged lor ndustry.
							Lorem Ipsum has been the industry’s standard dummy text
							ever sinceth 1500s,tronic when an unknown printer took a
							galley of type and scrambledto lsi make a type tronic
							specimen book. It has survived not only five centuries, but
							al
						</p>
					</div>
				</Grid>
			</div>
		</Style>
	);
};

export default WhoWeAre;

const Style = styled.section`
	background-image: url(${Waves.src});
	background-repeat: no-repeat;
	background-size: 110vw;
	background-position: center;
	@media screen and (min-width: 1200px) {
		padding-top: 200px;
	}
	.illus {
		margin-right: 20px;
	}

	h3 {
		text-align: center;
		margin-bottom: min(100px, 10vw);
	}
	h2 {
		margin-bottom: 40px;
		line-height: 1.3;
		@media (min-width: 992px) {
			font-size: 45px;
		}
	}
	p {
		max-width: 520px;
	}
	@media (max-width: 768px) {
		text-align: center;
		background-size: 150%;
		.illus {
			margin-right: 0;
		}
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
		.container {
			> div {
				> div {
					:first-child {
						grid-row: 2;
					}
					:last-child {
						grid-row: 1;
					}
				}
			}
		}
	}
`;
