import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import * as SC from "../components/styled-components"
import HeaderNavBar from "../components/HeaderNavBarComponent"

const aboutText: string = "Hello. I'm Sean Soraghan, a technical sound designer and audio programmer specialising in interactive audio. " +
    "I enjoy creating games, tools and sounds, and I especially enjoy the intersection between these creative and technical pursuits. " +
    "Details of some of my current and past projects can be found on the projects page." +
    "\n\nI'm based in Shropshire, UK, and I'm currently Senior Audio Programmer for Lucid Games.\n\nYou can reach me at "
const AboutPage: React.FC<PageProps> = () =>
{
    return (
        <main>
            <HeaderNavBar currentItemName="about" />
            <SC.OuterWrapper>
                <SC.AboutContentWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaTextWrapper>
                            <SC.Media><StaticImage alt="" src={'../images/office.png'} aspectRatio={1920 / 1080} /></SC.Media>
                            <SC.AboutMediaTextEmailWrapper><SC.AboutMediaText>{aboutText}</SC.AboutMediaText><SC.AboutMediaTextBold>sean@softsound.uk</SC.AboutMediaTextBold></SC.AboutMediaTextEmailWrapper>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                </SC.AboutContentWrapper>
            </SC.OuterWrapper>
        </main>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>Soft Sound | About</title>