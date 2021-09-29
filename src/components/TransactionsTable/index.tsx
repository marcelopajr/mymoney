import { Container } from './styles';

export function TransactionsTable() {
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
            <td>Software Development</td>
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
