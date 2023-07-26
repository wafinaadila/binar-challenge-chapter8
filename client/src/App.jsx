import { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [refresh, setRefresh] = useState(1);

  const handleOnRefresh = () => {
    setRefresh(refresh + 1);
  };

  return (
    <div className="p-5">
      <h1>CRUD Player</h1>
      <Form onRefresh={handleOnRefresh} />
      <br />
      <br />

      <Table refresh={refresh} />
    </div>
  );
}

export default App;
