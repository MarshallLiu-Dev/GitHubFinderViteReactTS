import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const GitHubProjects = ({ userName }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}/repos?sort=stars&per_page=5`);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
            }
        };

        fetchProjects();
    }, [userName]);

    return (
        <Router>
            <div>
                <h2>Best Projects for {userName}</h2>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <Link to={`/project/${project.name}`}>{project.name}</Link>
                        </li>
                    ))}
                </ul>
                <Switch>
                    <Route path="/project/:projectName">
                        <ProjectDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

const ProjectDetails = () => {
    const { projectName } = useParams();

    return <h3>Project Details: {projectName}</h3>;
};

export default GitHubProjects;