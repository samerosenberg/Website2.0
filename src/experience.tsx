/**
 * Component to print out Epic information inside Epic.py
 *
 * @export
 * @return {Epic}  {JSX.Element}
 */
export function Epic(): JSX.Element {
    return (
        <div>
            <h2>
                <strong>Epic Systems</strong>
            </h2>
            <h3>Software Developer</h3>
            <p>June 2021 - Present</p>
            <br></br>
            <p>
                I am currently a software developer at Epic on the Ambulatory
                Notes team.
            </p>
            <p>
                I create software to enhance the efficiency of clinician
                documentation so they can focus on what really matters, the
                patient.
            </p>
            <br></br>
        </div>
    );
}

/**
 * Component to print out TechBlue information inside TechBlue.txt
 *
 * @export
 * @return {TechBlue}  {JSX.Element}
 */
export function TechBlue(): JSX.Element {
    return (
        <div>
            <h2>
                <strong>TechBlue Inc.</strong>
            </h2>
            <h3>Application Developer Intern</h3>
            <p>January 2020 - December 2020</p>
            <br></br>
            <p>
                For my first internship in college I worked as an Application
                Developer intern at a small consulting firm based in Pittsburgh,
                PA.
            </p>
            <p>
                Most notably I was the lead intern on a project to build a
                schedule optimizer for healthcare workers in response to
                Covid-19.
            </p>
            <br></br>
        </div>
    );
}
