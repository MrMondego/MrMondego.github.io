function ShowLinks(prof) {
    console.log(prof.prof)
    switch(prof.prof) {
        case "": break;
        case "developer":
            return(<>
                <li><a href='https://beta.reactjs.org/learn/tutorial-tic-tac-toe' target="_blank" rel="noreferrer">React Tutorial</a></li>
                <li><a href="https://medium.com/@jmuse/передача-данных-между-компонентами-в-react-d86394da2b50" target="_blank" rel="noreferrer">Передача данных между компонентами</a></li>
                <li><a href="https://reactrouter.com/en/main/start/tutorial" target="_blank" rel="noreferrer">React Router</a></li>
                <li><a href="https://ru.stackoverflow.com/" target="_blank" rel="noreferrer">Stackoverflow (рус)</a></li>
                <li><a href="https://habr.com" target="_blank" rel="noreferrer">Хабр</a></li>
                <li><a href="https://developer.mozilla.org/ru/" target="_blank" rel="noreferrer">MDN</a></li>
                <li><a href="https://learn.javascript.ru/" target="_blank" rel="noreferrer">Современный учебник по JavaScript</a></li>
            </>);
        case "designer":
            return(<>
                <li><a href="https://showbox.com/" target="_blank" rel="noreferrer">Showbox</a></li>
                <li><a href="https://coverr.co/" target="_blank" rel="noreferrer">Coverr</a></li>
                <li><a href="https://www.pexels.com/ru-ru/" target="_blank" rel="noreferrer">Pexels</a></li>
                <li><a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a></li>
                <li><a href="https://www.iconfinder.com/" target="_blank" rel="noreferrer">Iconfinder</a></li>
                <li><a href="https://fonts.google.com/icons?selected=Material+Icons" target="_blank" rel="noreferrer">Material icons</a></li>
                <li><a href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google fonts</a></li>
            </>)
        case "backend":
            return(<>
                <li><a href="https://github.com/jlord/git-it-electron" target="_blank" rel="noreferrer">Git</a></li>
                <li><a href="https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/?WT.mc_id=dotnet-35129-website" target="_blank" rel="noreferrer">Learning C#</a></li>
                <li><a href="https://www.mongodb.com/nosql-explained" target="_blank" rel="noreferrer">NoSQL explained</a></li>
                <li><a href="https://swoopnow.com/user-authentication/" target="_blank" rel="noreferrer">User authentication</a></li>
                <li><a href="https://aws.amazon.com/what-is/api/" target="_blank" rel="noreferrer">What is an API?</a></li>
                <li><a href="https://www.oracle.com/database/what-is-database/" target="_blank" rel="noreferrer">What is a database?</a></li>
                <li><a href="https://springframework.guru/gang-of-four-design-patterns/" target="_blank" rel="noreferrer">EOF design patterns</a></li>
            </>)
        case "devops":
            return(<>
                <li><a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer">Ruby</a></li>
                <li><a href="https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/" target="_blank" rel="noreferrer">Operating system</a></li>
                <li><a href="https://www.comptia.org/content/guides/what-is-a-network-protocol" target="_blank" rel="noreferrer">What is a network protocol</a></li>
                <li><a href="https://networkencyclopedia.com/cache-server/" target="_blank" rel="noreferrer">Cache server</a></li>
                <li><a href="https://www.checkpoint.com/cyber-hub/network-security/what-is-firewall/" target="_blank" rel="noreferrer">What is firewall?</a></li>
                <li><a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd" target="_blank" rel="noreferrer">What is CI/CD?</a></li>
                <li><a href="https://thenewstack.io/applying-basic-vs-advanced-monitoring-techniques/" target="_blank" rel="noreferrer">Applying Basic vs. Advanced Monitoring Techniques</a></li>
            </>)
        case "QA":
            return(<>
                <li><a href="https://www.guru99.com/all-about-quality-assurance.html" target="_blank" rel="noreferrer">What is Quality Assurance(QA)? Process, Methods, Examples</a></li>
                <li><a href="https://softwaretester.careers/the-software-testers-mindset/" target="_blank" rel="noreferrer">The Software Tester’s Mindset</a></li>
                <li><a href="https://cadabra.studio/blog/why-is-quality-assurance-important-qa-role-in-sdlc/" target="_blank" rel="noreferrer">QA Role In SDLC: Why Is Quality Assurance Important In IT</a></li>
                <li><a href="https://www.guru99.com/manual-testing.html" target="_blank" rel="noreferrer">Manual Testing Tutorial: What is, Types, Concepts</a></li>
                <li><a href="https://huddle.eurostarsoftwaretesting.com/project-management-in-software-testing/" target="_blank" rel="noreferrer">Project Management in Software Testing</a></li>
                <li><a href="https://www.atlassian.com/continuous-delivery/software-testing/automated-testing" target="_blank" rel="noreferrer">What is Automated Testing?</a></li>
                <li><a href="https://www.netguru.com/blog/how-to-write-qa-report" target="_blank" rel="noreferrer">How do you write a QA report?</a></li>
            </>)
    }
}

export default function JobList(props) {
    return(<ul>
        <ShowLinks prof={props.profession} />
    </ul>)
}