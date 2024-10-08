import HeroSection from "@/components/hero-section/HeroSection";
import ImageBox from "@/components/mainBoxes/imageBox/ImageBox";
import Bar from "@/components/img-vid-bar/bar";
import TitleSection from "@/components/titleBar/mainSection";

export default function Home() {
	return (
		<>
				<HeroSection type="image" />
				<Bar />
				<TitleSection
					title="Free Stock Photos"
					titleClassName="font-medium mt-8"
				/>
                <ImageBox />
		</>
	);
}
