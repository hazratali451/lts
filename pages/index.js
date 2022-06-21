import Head from "../src/layouts/Layout";

import Calendar from "../src/layouts/sections/Calendar";
import Customers from "../src/layouts/sections/Customers";
import Feedback from "../src/layouts/sections/Feedback";
import Hero from "../src/layouts/sections/Hero";
import HowItWorks from "../src/layouts/sections/HowItWorks";
import Reviews from "../src/layouts/sections/Reviews";
import Services from "../src/layouts/sections/Services";
import WhoWeAre from "../src/layouts/sections/WhoWeAre";
import WhyUs from "../src/layouts/sections/WhyUs";

import Footer from "../src/layouts/Footer";
import Navbar from "../src/layouts/Navbar";
export default function Home() {
	return (
		<>
			<Head title="Home | Lynck Tech Solutions" />
			<Navbar />
			<main>
				<Hero />
				<WhoWeAre />
				<Services />
				<HowItWorks />
				<Customers />
				<Feedback />
				<Reviews />
				<Calendar />
				<WhyUs />
			</main>
			<Footer />
		</>
	);
}
