import { useParams } from 'react-router-dom'; //useParams est un hook : pour récupérer le nom du client à partir de l'URL

const Dataclients = { //clientsData contient les données pour chaque client.
  platon: {
    content: <div>Platon kkkkkkk</div>
  },
  solane: {
    content: <div>Solane sssssssssssssssssss</div>
  },
  sedal: {
    content: <div> Sedal tchiiiiiiiiiiiiiiiiiiiii</div>
  },
};

const StudyCase = () => {
  const { clientName } = useParams();
  const client = Dataclients[clientName];

  let content;
  if (client) {
    content = client.content;
  } else {
    content = <div>not found</div>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default StudyCase;
