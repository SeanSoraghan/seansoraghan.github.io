import React from "react"
import * as SC from "../components/styled-components"
import type { HeadFC, PageProps } from "gatsby"
import SoundCloudTrackList from "../components/SoundCloudTrackList";
import VideoComponent from "../components/Video";
import { Music } from "../content/music-content";
import { StaticImage } from 'gatsby-plugin-image'
import HeaderNavBar from "../components/HeaderNavBarComponent";

const MusicPage: React.FC<PageProps> = () =>
{
    return (
        <>
            <HeaderNavBar currentItemName="music" />
            <SC.OuterWrapper>
                <SC.ContentWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Vital Doodles</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.MediaText>{Music.vitalDoodlesText}</SC.MediaText>
                            <SC.Media>
                                <SoundCloudTrackList trackURLs={[
                                    "https://soundcloud.com/hangar-season/07-drip-3",
                                    "https://soundcloud.com/hangar-season/23-celestial-4",
                                    "https://soundcloud.com/hangar-season/01-dream-1",
                                    "https://soundcloud.com/hangar-season/05-map-2",
                                ]} />
                            </SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Wonky Piano</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.MediaText>My parents have a piano in their house that has never been tuned and is in a pretty bad state. Some of the hammers don't respond properly to the sustain pedal, but this means you can play those keys and have all the other strings resonate in response. I recorded an odd-meter theme on it, as well as some percussive stuff, then made this out of the recording, using a lot of processing.</SC.MediaText>
                            <SC.Media>
                                <SoundCloudTrackList trackURLs={[
                                    "https://soundcloud.com/hangar-season/stirling",
                                ]} />
                            </SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Piano Sketches</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.MediaText>A couple of piano themes I sketched out. I'd imagine these being used in something like an atmospheric exploration game.</SC.MediaText>
                            <SC.Media>
                                <SoundCloudTrackList trackURLs={[
                                    "https://soundcloud.com/hangar-season/piano_light_1-1",
                                    "https://soundcloud.com/hangar-season/piano_light_2-2",
                                ]} />
                            </SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Broken Guitar</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.MediaText>{Music.brokenGuitarText}</SC.MediaText>
                            <SC.Media>
                                <VideoComponent title="Creative Audio Reel" embedURL="https://player.vimeo.com/video/1238877226?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                            </SC.Media>
                            <SC.Media><StaticImage alt="" src={'../images/OfficeCeiling.jpg'} aspectRatio={1920 / 1080} /></SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Trivial Pursuits</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.MediaText>An instrumental guitar song I wrote for my brother's wedding.</SC.MediaText>
                            <SC.Media>
                                <SoundCloudTrackList trackURLs={[
                                    "https://soundcloud.com/hangar-season/trivial-pursuits",
                                ]} />
                            </SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>It's Sounds</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.MediaText>It always (usually) starts with a sound.</SC.MediaText>
                            <SC.Media>
                                <SoundCloudTrackList trackURLs={[
                                    "https://soundcloud.com/hangar-season/its-sounds",
                                ]} />
                            </SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Monitor</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.MediaText>Another little dancy number. Can't remember why I named this one Monitor.</SC.MediaText>
                            <SC.Media>
                                <SoundCloudTrackList trackURLs={[
                                    "https://soundcloud.com/hangar-season/monitor",
                                ]} />
                            </SC.Media>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                </SC.ContentWrapper>
            </SC.OuterWrapper>
        </>
    )
}

export default MusicPage

export const Head: HeadFC = () => <title>Sean Soraghan | Music</title>
