import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { TableContainer } from "@mui/material";

const FetchStats = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/data", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.message);
        setDocuments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ width: "80%", margin: "0 auto", marginTop: "40%" }}>
        Loading...
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div>
      <Card
        sx={{
          width: "80%",
          margin: "0 auto",
          marginTop: "2rem",
          padding: "5rem",
        }}
      >
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((item: any) => (
              <TableRow key={item.email}>
                <TableCell>{item.email}</TableCell>
                <TableCell align="right">{item.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Card>
    </div>
  );
};

export default FetchStats;
