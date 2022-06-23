import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import image from "../../../public/images/client/client.png";
import dots from "../../../public/images/client/dots.png";
import line from "../../../public/images/client/line.png";
import quote from "../../../public/images/client/quote.png";
const settings = {
	slidesPerView: 1,
	breakpoints: {
		0: {
			spaceBetween: 12,
		},
		768: {
			spaceBetween: 50,
		},
	},
};
const Reviews = () => {
	const data = [
		{
			image: image,
			feedback:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tinciduntfames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere tortoquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
			name: "Mary Smith",
			job: "Anesthesiologist",
		},
		{
			image: image,
			feedback:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tinciduntfames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere tortoquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
			name: "Mary Smith",
			job: "Anesthesiologist",
		},
		{
			image: image,
			feedback:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tinciduntfames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere tortoquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
			name: "Mary Smith",
			job: "Anesthesiologist",
		},
	];
	return (
		<Style>
			<div className="container">
				<h2 data-aos-duration="600" data-aos="flip-up">What Other Says About Us</h2>
				<div className="position-relative">
					<Swiper {...settings}>
						{data?.map((item, index) => (
							<SwiperSlide key={index}>
								<Review data={item} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="dots">
						<Image src={dots} alt="dots" />
					</div>
				</div>
			</div>
		</Style>
	);
};

export default Reviews;

const Style = styled.section`
	overflow: hidden;
	h3 {
		text-align: center;
		margin-bottom: min(100px, 10vw);
	}
	h2 {
		max-width: 450px;
		margin-bottom: 50px;
		line-height: 1.3;
		@media screen and (min-width: 768px) {
			font-size: 45px;
		}
	}
	.position-relative {
		position: relative;
		padding-bottom: 120px;
	}
	.dots {
		position: absolute;
		left: calc(50% + 25px);
		z-index: 1;
		bottom: 50px;
		span {
			display: block;
		}
	}
	.container > div {
		@media (min-width: 768px) {
			margin-left: 60px;
		}
		@media (min-width: 1200px) {
			margin-left: 100px;
			padding-right: 20px;
		}
		@media (min-width: 1400px) {
			margin-left: 160px;
			padding-right: 0;
		}
	}
`;

const Review = ({ data }) => {
	const swiper = useSwiper();
	return (
		<ReviewStyle>
			<div data-aos="fade-right" data-aos-duration="1000" className="thumb">
				<Image src={data.image} alt={data.name} />
			</div>
			<div data-aos="fade-left" data-aos-duration="1000" className="content">
				<div className="name-area">
					<div className="name">
						<h5>{data.name}</h5>
						<span>{data.job}</span>
					</div>
					<div className="line">
						<Image src={line} alt="line" />
					</div>
					<div className="quote">
						<Image src={quote} alt="quote" />
					</div>
				</div>
				<div className="w-100">
					<p>{data.feedback}</p>
					<div className="next" onClick={() => swiper.slideNext()}>
						<BsChevronRight />
					</div>
				</div>
			</div>
		</ReviewStyle>
	);
};

const ReviewStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	.thumb {
		width: 439px;
		border-radius: 26px;
		overflow: hidden;
		span {
			display: block !important;
		}
		img {
			width: 100% !important;
			object-fit: cover;
		}
	}
	.content {
		width: calc(100% - 439px);
		padding-left: 99px;
		.quote {
			@media screen and (max-width: 575px) {
				img {
					max-width: 50px !important;
				}
			}
		}
		.name-area {
			position: relative;
			display: flex;
			justify-content: space-between;
			.line {
				position: absolute;
				top: 0;
				left: 30px;
				img {
					@media screen and (max-width: 575px) {
						max-width: 180px !important;
					}
				}
			}
		}
		h5 {
			font-family: "Nunito", sans-serif;
		}
		p {
			width: 100%;
			border-top: 2px solid #80f5d423;
			padding-top: 20px;
			margin-top: 50px;
			margin-bottom: 70px;
		}
		.next {
			width: 70px;
			height: 70px;
			line-height: 70px;
			text-align: center;
			border-radius: 50%;
			position: relative;
			background: #80f5d4;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24px;
			cursor: pointer;
			margin-left: auto;
			&::before {
				position: absolute;
				content: "";
				width: 65px;
				height: 65px;
				border: 1px solid #80f5d4;
				left: -4px;
				bottom: -4px;
				border-radius: 50%;
			}
		}
	}
	@media screen and (max-width: 1199px) {
		.thumb {
			width: 330px;
		}
		.content {
			width: calc(100% - 330px);
			padding-left: 40px;
			padding-bottom: 25px;
		}
	}
	@media screen and (max-width: 991px) {
		.thumb {
			width: 250px;
		}
		.content {
			width: 100%;
			padding-left: 0;
			padding-bottom: 25px;
			margin-top: 30px;
			p {
				margin-top: 30px;
			}
		}
	}
	@media screen and (max-width: 767px) {
		@media (min-width: 576px) {
			padding-left: 20px;
			padding-right: 20px;
		}
		.thumb {
			width: 250px;
		}
		.content {
			width: 100%;
			padding-left: 0;
			padding-bottom: 25px;
			margin-top: 30px;
			p {
				margin-top: 30px;
				margin-bottom: 20px;
			}
		}
	}
`;
