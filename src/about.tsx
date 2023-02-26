import React from "react";

export class AboutMe extends React.Component {
    /**
     * Component to print contents of "Me.txt"
     *
     * @return {AboutMe} {JSX.Element}
     * @memberof AboutMe
     */
    render(): JSX.Element {
        return (
            <div>
                <p>
                    I'm a 23 year old software developer currently living in
                    Madison, WI.
                </p>
                <br></br>
                <p>
                    I enjoy doing a lot of things outside like going for long
                    bike rides, playing basketball or hiking.
                </p>
                <p>
                    During the winter months however you can mostly find me
                    indoors reading, playing video games, or bingeing tv shows.
                </p>
                <br></br>
                <p>
                    "The mind is everything. What you think you become." -Buddha
                </p>
            </div>
        );
    }
}
