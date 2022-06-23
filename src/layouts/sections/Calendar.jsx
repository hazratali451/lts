import { useState } from "react";
import { InlineWidget, PopupButton } from "react-calendly";
import styled from "styled-components";
const settings = {
	slidesPerView: "auto",
	breakpoints: {
		0: {
			spaceBetween: 12,
		},
		768: {
			spaceBetween: 30,
		},
	},
};



const Calendar = () => {

	const [isWork, setIsWork] = useState(false)

	setTimeout(() => {
		setIsWork(true)
	}, 2000)

	return (
		<Style id="calendar">
			<div className="container">
				<h2 data-aos="zoom-in-up" data-aos-duration="600">Pick a time to speak with a Website Consultant</h2>
				{isWork && <PopupButton
					url="https://calendly.com/lyncktechsolutions/consultation"
					rootElement={document.getElementById("__next")}
					text="Book a call"
				/>}
			</div>
		</Style>
	);
};

export default Calendar;

const Style = styled.section`
	text-align: center;
	h2 {
		margin-bottom: 25px;
		@media (min-width: 768px) {
			font-size: 50px;
		}
	}
	min-height: auto;
	.text-center {
		text-align: center;
		margin-top: 40px;
	}
	h3 {
		text-align: center;
		margin-bottom: min(100px, 10vw);
	}
	h2 {
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50px;
		line-height: 1.3;
		@media screen and (min-width: 768px) {
			font-size: 45px;
		}
	}
	.container {
		overflow: visible;
	}
	.calendly-popup-close::focus{
		box-shadow : none;
	}
`;


const CalendarCard = ({ data }) => {
	return (
		<Cont className="cont">
			<h6 className="subtitle">Fri</h6>
			<span className="date">29</span>
			<ul className="time">
				<li>14:15</li>
				<li>15:15</li>
				<li>16:15</li>
				<li>19:15</li>
				<li>21:35</li>
			</ul>
		</Cont>
	);
};
const Cont = styled.div`
	max-width: 149px;
	border-radius: 18px;
	background: #121212;
	padding: 30px 20px 20px;
	text-align: center;
	.subtitle {
		margin-bottom: 10px;
		opacity: 0.53;
	}
	.date {
		display: block;
		margin-bottom: 10px;
	}
	ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
			padding: 7px 0;
			&:not(:last-child) {
				opacity: 0.53;
			}
		}
	}
	._cUP1np9gMvFQrcPftuf._Y8HCTxgNkwxXcG_DCXx {
		margin: 0 !important;
	}
`;
