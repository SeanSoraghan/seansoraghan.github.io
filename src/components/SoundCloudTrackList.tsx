import React from "react";
import * as SC from "./styled-components"

interface SoundCloudTrackListProps
{
    // Regular soundcloud.com track page URLs, e.g. https://soundcloud.com/artist/track-name
    trackURLs: string[],
}

const embedURL = (trackURL: string) =>
    "https://w.soundcloud.com/player/?url=" + encodeURIComponent(trackURL) +
    "&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false";

const SoundCloudTrackList = (props: SoundCloudTrackListProps) => (
    <SC.SoundCloudTrackListWrapper>
        {props.trackURLs.map((trackURL) => (
            <SC.SoundCloudIFrame
                key={trackURL}
                src={embedURL(trackURL)}
                allow="autoplay"
                title={trackURL}
            />
        ))}
    </SC.SoundCloudTrackListWrapper>
);

export default SoundCloudTrackList;
