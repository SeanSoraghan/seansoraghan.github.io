export const Projects = {
    lucidText: "As Senior Audio Programmer at Lucid Games, I took ownership of various large scale audio systems, written both in Unreal Engine 5 and in a proprietary engine while working with a co-dev partner. " +
        "I built a custom UE5 Wwise plugin with revised object management, in order to improve on the runtime cost of the Audiokinetic Wwise plugin. " +
        "The plugin included a runtime raytrace-based obstruction system with dynamic pathing, as well as a reverb system supporting both pre-baked and runtime reverb estimation. " +
        "Unfortunately everything I worked on at Lucid is still under NDA. I wanted a way to demonstrate what I'd been working on, so I decided to just talk through the systems and use my voice to demonstrate where possible (e.g. for obstruction and reverb)." +
        "\n\nI worked very closely with the Audio Director at Lucid to specify and prioritize technical audio systems that served the entire audio team." +
        "I really enjoy writing systems and tools that can help elevate an audio team and bring a game's audio to life.",
    bgText: "I worked as a technical sound designer for Baldur's Gate III, alongside the fantastic audio team at Larian Studios. " +
        "\n\nAs a technical sound designer on the project, I wrote a lot of Python scripts for Wwise to help smooth out the workflow of the asset generation pipeline. " +
        "I also helped out with technical implementation both in Wwise and in Larian's in-house game engine, and worked on sound design and sound systemics.",
    impacterText: "I worked on the C++ implementation for the Impacter Wwise plugin. This was an extremely fun project to work on, " +
        "translating Python audio analysis and synthesis code into C++ using the Eigen library, and designing the simple plugin UI that exposes physics-inspired parameters to the user, " +
        "allowing them to cross-synthesize impact sounds and simulate shrinking or enlarging objects, as well as altering the impact velocity and position." +
        "\n\nI also implemented a destructible demo environment in the Unreal engine in which all of the sound was implemented using Impacter, and the plugin parameters were driven by " +
        "the game physics.",
    akUnrealText: "I worked a lot on the Wwise Unreal integration at Audiokinetic. This involved the 'componentization' of Spatial Audio features such as Rooms, Portals, Geometry and Acoustic " +
        "Textures. In other words - creating individual components for these features such that they can be used in custom Blueprints, as well as through Spatial Audio Volumes. Building upon this " +
        "componentization, I added functionality to the Unreal integration for estimating the reverb Decay and HF Damping values for a reverb effect automatically, when Reverb and Geometry " +
        "Components are used, by analysing the geometry to which they are attached. I also updated the way that acoustic textures are assigned to surfaces on Spatial Audio Volume objects, " +
        "as well as their display in the viewport.",
    ak3DMeterText: "I implemented the 3D Meter in Wwise by updating an existing prototype, and adding a pixel shader for faster and smoother graphics. Using the in-built Wwise ambisonic decoding " +
        "functionality, the ambisonics channel data is decoded onto virtual speaker positions around a sphere in the local bus space. The pixel shader is used to construct a directionality heatmap " +
        "from this data. The 3D Meter thus allows users to inspect the directional information contained in an ambisonics bus and how it is affected by the sources distributed around the listener.",
    kimaText: "My Engineering Doctorate focused on the analysis and representation of musical timbre. As part of this research, I developed a real-time audio feature extraction tool that was " +
        "used to analyse audio in real time and extract timbre descriptors. These timbre descriptors could then be mapped to the parameters of a visualisation algorithm. " +
        "I made use of this feature extractor tool in various large-scale live audiovisual installations, in collaboration with Analema Group - a London-based arts collective. The largest of " +
        "these was held at the Roundhouse in London, and featured a 360 degree projection of audio-reactive visuals, driven by microphones that could be used by the attendees. For this " +
        "installation, we used the 'Wekinator' machine learning tool to construct the mappings from timbre features to visualization parameters."
}