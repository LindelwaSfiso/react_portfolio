import {TypeAnimation} from "react-type-animation";

import ProfilePicture from "../../assets/profile.png";
import styled from "styled-components";


const StyledHeroSection = styled.section`
  ${({theme}) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  h1 {
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
`;


export default function HeroSection() {
    return (
        <StyledHeroSection>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-2 my-4">
                {/** intro text */}
                <div className="grid-span-8 flex items-center text-white justify-start">
                    <div className="text-center sm:text-start">
                        <h1 className="text-xl sm:text-3xl font-bold">Hey there?</h1>
                        <h3 className="font-extrabold text-3xl sm:text-6xl mt:3 sm:mt-0 my-0">Dlamini S. Lindelwa</h3>
                        <h1 className="font-bold text-xl sm:text-3xl">here.</h1>

                        <div
                            className="text-blue-500 text-xl sm:text-3xl mt-5 font-bold w-[100%] before:content-['\200b']">
                            <TypeAnimation
                                sequence={[
                                    "Electrical & Electronic Engineer",
                                    1000,
                                    "Full Stack Developer",
                                    1000,
                                    "Mobile, Web and Desktop Dev.",
                                    1000,
                                    "Embedded/IoT Systems Engineer",
                                    700,
                                    "Microwave Tx and RAN Engineer",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                cursor={false}
                            />
                        </div>

                        <h3 className="font-bold text-xl sm:text-2xl mt-3">Android Developer Hobbyist</h3>

                    </div>
                </div>

                {/** hero image */}
                <div className="grid-span-4 flex items-center justify-center">
                    <img
                        src={ProfilePicture}
                        alt="dlamini lindelwa profile pics"
                        className="h-[80%] hover:scale-110"
                    />
                </div>
            </div>
        </StyledHeroSection>
    );
}
