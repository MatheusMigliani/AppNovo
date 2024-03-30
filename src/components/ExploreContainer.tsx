import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <img src="/public/assets/1689744608860 (2).jpg" alt="" />
      <strong>Matheus Davi Félix Migliani França</strong>
      <p>Turma <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">ADS0302N</a></p>
    </div>
  );
};

export default ExploreContainer;
