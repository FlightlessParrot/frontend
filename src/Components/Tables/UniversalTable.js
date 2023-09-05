import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";


export default function UniversalTable({ data,headersObject,name }) {
  
  const theTable = data.length>0 ? new myTable(data, headersObject): null;

  return (
      theTable && <TableContainer variant='striped' overflowX={'auto'}>
      <Table>
      <TableCaption>{name}</TableCaption>
        <Thead>
          <Tr>{theTable.headers()}</Tr>
        </Thead>
        <Tbody>{theTable.body()}</Tbody>
      </Table>
    </TableContainer>
  );
}

class myTable {
  constructor(objectsArray, headersObject) {
 
    this.categories = headersObject
    this.data = objectsArray;
  }

  set categories(object) {
    return this.tableCategories=Object.values(object);
  }
  
  get categories() {
    return this.tableCategories;
  }
  headers() {
    const jsxHeaders = this.categories.map((e, i) => <Th key={i}>{e}</Th>);
    return jsxHeaders;
  }
  body() {
    this.rows = [];

    this.data.forEach((row, x) => {
      const positions = [];
      let i = 0;
      for (const [category, position] of Object.entries(row)) {
        positions.push(<Td key={i}>{position}</Td>);
        i++;
      }

      this.rows.push(<Tr key={x}>{positions}</Tr>);
    });
    return this.rows;
  }
}
