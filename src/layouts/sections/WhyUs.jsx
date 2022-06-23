import Image from "next/image";
import styled from "styled-components";
import shapes from "/public/images/shapes.png";

const WhyUs = () => {
	const data = [
		{
			title: "$8.5M+",
			subtitle: "Happy Clients",
		},
		{
			title: "1M+",
			subtitle: "User Worldwide",
		},
		{
			title: "196+",
			subtitle: "Country Listed",
		},
		{
			title: "21",
			subtitle: "Team Member",
		},
	];
	return (
		<Style>
			<div className="w-100">
				<div className="container">
					<h2 data-aos-duration="600" data-aos="flip-up">Why Choose Us</h2>
					<p>
						crambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into
					</p>
					<div className="card-wrapper">
						{data?.map((item, i) => (
							<div data-aos="flip-down" data-aos-duration="1000" className="card" key={i}>
								<div className="inner">
									<h3 className="title">{item.title}</h3>
									<span>{item.subtitle}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div
					data-aos="fade-left"
					data-aos-duration="2000"
					className="shapes">
					<Image src={shapes} alt="" />
				</div>
			</div>
		</Style>
	);
};

export default WhyUs;

const Style = styled.section`
	text-align: center;
	h2 {
		margin-bottom: 25px;
		@media (min-width: 768px) {
			font-size: 50px;
		}
	}
	.w-100 {
		width: 100%;
	}
	.shapes {
		text-align: left;
		margin-top: 40px;
		img {
			max-width: 100%;
		}
	}
	p {
		max-width: 514px;
		margin-left: auto;
		margin-right: auto;
	}
	.card-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: -12px;
		margin-top: 20px;
	}
	.card {
		width: calc(100% / 4);
		.inner {
			border: 1px solid #80f5d4;
			border-radius: 8px;
			padding: 30px;
			text-align: center;
		}
		padding: 12px;
		@media (min-width: 1400px) {
			padding: 20px;
		}
		@media (max-width: 991px) {
			width: 50%;
		}
		@media (max-width: 424px) {
			width: 100%;
		}
	}
`;
