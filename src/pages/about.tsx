import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import * as SC from "../components/styled-components"
import VideoComponent from "../components/Video";
import HeaderNavBar from "../components/HeaderNavBarComponent"

const aboutText: string = "Hello. I'm Sean Soraghan, a technical sound designer and audio programmer specialising in interactive audio. " +
    "I enjoy creating games, tools and sounds, and I especially enjoy the intersection between these creative and technical pursuits. " +
    "Details of some of my current and past projects can be found on the projects page." +
    "\n\nI'm based in Glasgow, UK, and I'm currently open for opportunities and collaborations.\n\nYou can reach me at "
const AboutPage: React.FC<PageProps> = () =>
{
    return (
        <main>
            <HeaderNavBar currentItemName="about" />
            <SC.OuterWrapper>
                <SC.AboutContentWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaTextWrapper>
                            <SC.Media><StaticImage alt="" src={'../images/HomeOffice2026.jpg'} aspectRatio={2048 / 1536} /></SC.Media>
                            <SC.AboutMediaTextEmailWrapper><SC.AboutMediaText>{aboutText}</SC.AboutMediaText><SC.AboutMediaTextBold>sasoraghan@gmail.com</SC.AboutMediaTextBold></SC.AboutMediaTextEmailWrapper>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaTextWrapper>
                            <SC.AboutMediaTextEmailWrapper><SC.AboutMediaText>Here are some past creative and personal projects I have undertaken / collaborated on.</SC.AboutMediaText></SC.AboutMediaTextEmailWrapper>
                            <SC.Media>
                                <VideoComponent title="Creative Audio Reel" embedURL="https://player.vimeo.com/video/821627049?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                            </SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                </SC.AboutContentWrapper>
            </SC.OuterWrapper>
        </main>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>Sean Soraghan | About</title>