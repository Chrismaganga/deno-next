
const Dashboard = () => {
  const [data, setData] = useState({ jsProjects: [], pythonProjects: [], frameworks: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/dashboard-data')
      .then(response => {
        setData({
          jsProjects: jsProjects,
          pythonProjects: pythonProjects,
          frameworks: response.data.frameworks
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>JavaScript Projects</h2>
        <ul>
          {data.jsProjects.map(project => (
            <li key={project.name}>{project.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Python Projects</h2>
        <ul>
          {data.pythonProjects.map(project => (
            <li key={project.name}>{project.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Frameworks</h2>
        <ul>
          {data.frameworks.map(framework => (
            <li key={framework.id}>{framework.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;