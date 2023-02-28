/**
 * Component to print out about me information inside Me.txt
 *
 * @export
 * @return {*}  {JSX.Element}
 */
export function AboutMe(): JSX.Element {
    return (
        <div>
            <p>
                I'm a 23 year old software developer currently living in
                Madison, WI.
            </p>
            <br></br>
            <p>
                I enjoy doing a lot of things outside like going for long bike
                rides, playing basketball or hiking.
            </p>
            <p>
                During the winter months however you can mostly find me indoors
                reading, playing video games, or bingeing tv shows.
            </p>
            <br></br>
            <p>"The mind is everything. What you think you become." -Buddha</p>
        </div>
    );
}

/**
 * Component to print out contact information inside Contact.txt
 *
 * @export
 * @return {Contact}  {JSX.Element}
 */
export function Contact(): JSX.Element {
    return (
        <div>
            <p>
                Feel free to reach out to me at{" "}
                <a href="mailto: serosenberg99@gmail.com">
                    serosenberg99@gmail.com
                </a>
            </p>
            <br></br>
            <p>
                Check out the socials folder to stay connected with me on social
                media!
            </p>
        </div>
    );
}
