import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Pizza with friends</td>
            <td className="outcome">- $20</td>
            <td>Food</td>
            <td>09/28/2021</td>
          </tr>
          <tr>
            <td>Website freelancer</td>
            <td className="income">$500</td>
            <td>Software Development</td>
            <td>09/20/2021</td>
          </tr>
          <tr>
            <td>Salary</td>
            <td className="income">$2500</td>
            <td>Front-end Developer</td>
            <td>09/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
