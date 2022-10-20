import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome da Sala</th>
          <th>Codigo</th>
          <th>Descricao</th>
        </tr>
      </thead>
      <tbody id="listarSalaas">
        
      </tbody>
    </Table>
  );
}

export default BasicExample;






function listarSalas(){
    url = `https://jsonplaceholder.typicode.com/todos/7`;

    lista = document.getElementById("listarSalas");

    fetch(url).then((r) => r.json().then((r) =>{
        if(r.success){
            r.r.forEach((r1) => {
                lista.innerHTML += 
                `<td>${r1.id}</td>
                <td>${r1.title}</td>
                <td>${r1.userId}</td>`
            });
        }
    }))
}
            