/**
 * Component to print out machine learning projects info inside MachineLearning.txt
 *
 * @export
 * @return {MachineLearning}  {JSX.Element}
 */
export function MachineLearning(): JSX.Element {
    return (
        <div>
            <h2>Machine Learning Projects</h2>
            <br></br>
            <p>
                Machine learning has always been an interesting topic to me, so
                I followed some tutorials online to create some pretty cool
                projects
            </p>
            <p>
                Check out the list of projects{" "}
                <a
                    href="https://github.com/serose99/ML-Projects"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
            </p>
        </div>
    );
}

/**
 * Component to hold contents of DraftGenie.txt
 *
 * @export
 * @return {DraftGenie}  {JSX.Element}
 */
export function DraftGenie(): JSX.Element {
    return (
        <div>
            <h2>Draft Genie</h2>
            <br></br>
            <p>
                At SteelHacks 2019 my friend and I built a machine learning
                model to accurately predict where a player would be drafted in
                that years upcoming draft.
            </p>
            <p>
                Check out the repository{" "}
                <a
                    href="https://github.com/serose99/DraftGenie"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
            </p>
        </div>
    );
}
