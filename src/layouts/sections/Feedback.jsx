import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import Star from "../../../public/images/icons/star.svg";

const settings = {
	slidesPerView: "auto",
	breakpoints: {
		0: {
			spaceBetween: 12,
		},
		768: {
			spaceBetween: 50,
		},
	},
};

const Feedback = () => {
	const data = [
		{
			stars: 5,
			feedback:
				"crambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged lor ndustry.",
			fullName: "James Wilson",
			job: "Software Developer",
		},
		{
			stars: 5,
			feedback:
				"crambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged lor ndustry. ",
			fullName: "Mary Smith",
			job: "Anesthesiologist",
		},
	];
	return (
		<Style>
			<div className="container">
				<h3>Happy Reviews</h3>
				<h2>What Our Happy customers say About Us</h2>
				<Swiper {...settings}>
					{data?.map((item, index) => (
						<SwiperSlide key={index}>
							<Review data={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Style>
	);
};

export default Feedback;

const Style = styled.section`
	overflow: hidden;
	h3 {
		text-align: center;
		margin-bottom: min(100px, 10vw);
	}
	h2 {
		max-width: 600px;
		margin-bottom: 50px;
		line-height: 1.3;
		@media screen and (min-width: 768px) {
			font-size: 45px;
		}
	}
	.container > div {
		overflow: visible;
		.swiper-slide {
			width: 60vw !important;
			min-width: 800px;
			max-width: 930px;
			@media (max-width: 768px) {
				min-width: 90%;
			}
		}
	}
`;

const Review = ({ data }) => {
	return (
		<ReviewStyle>
			<div className="stars">
				{data?.stars >= 1 && <Star />}
				{data?.stars >= 2 && <Star />}
				{data?.stars >= 3 && <Star />}
				{data?.stars >= 4 && <Star />}
				{data?.stars >= 5 && <Star />}
			</div>
			<p>{data?.feedback}</p>
			<footer>
				<span>{data?.fullName}</span>
				<span>{data?.job}</span>
			</footer>
		</ReviewStyle>
	);
};
const ReviewStyle = styled.div`
	border: 1px solid #80f5d4;
	border-radius: 5px;
	padding: 40px;
	@media (max-width: 768px) {
		padding: 20px;
	}
	.stars {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		@media (max-width: 768px) {
			margin-bottom: 20px;
		}
		svg {
			margin-right: 10px;
			@media (max-width: 768px) {
				margin-right: 5px;
			}
		}
	}
	p {
		margin-bottom: 40px;
		color: #fff;
		opacity: 0.6;
		font-size: 20px;
		@media (max-width: 768px) {
			font-size: 16px;
			margin-bottom: 25px;
		}
		::after {
			content: "“";
		}
		::before {
			content: "“";
		}
	}
	footer {
		display: flex;
		flex-direction: column;
		span {
			color: #fff;
			:first-child {
				opacity: 0.6;
				font-size: 20px;
				@media (max-width: 768px) {
					font-size: 14px;
				}
			}
			:last-child {
				font-size: 18px;
				@media (max-width: 768px) {
					font-size: 14px;
				}
			}
		}
	}
`;
