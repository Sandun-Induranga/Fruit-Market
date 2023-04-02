import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AppHeader from "../../../components/AppHeader";
import AdminMenu from "../../../components/AdminMenu";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { TextField } from "@mui/material";
import axios from "axios";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Customer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get("http://localhost:8080/fresh/customer")
      .then(function (res) {
        alert("Done");
      })
      .catch(function (err) {
        alert("Error");
      });
  };

  return (
    <>
      <AppHeader />
      <AdminMenu />

      <div className="min-h-screen w-full pt-24 pl-64 pr-4 bg-green-50">
        <div className="flex justify-end">
          <Button
            className="!bg-green-800 !mb-6 !text-white"
            onClick={handleOpen}
          >
            Add Customer
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box className="absolute w-1/2 h-max bg-white border-2 border-slate-400 rounded-lg shadow-lg p-6 top-0 bottom-0 left-0 right-0 m-auto">
                <h3 className="text-green-800 text-xl text-center">
                  Manage Customer
                </h3>
                <form
                  className="w-full grid grid-cols-2 gap-6 mt-6"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    label="Customer NIC"
                    name="cusNic"
                    type="text"
                    color="success"
                    fullWidth
                    placeholder="Customer NIC"
                  />
                  <TextField
                    label="Customer Name"
                    name="cusName"
                    type="text"
                    color="success"
                    fullWidth
                    placeholder="Customer Name"
                  />
                  <TextField
                    label="Address"
                    name="cusAddress"
                    type="text"
                    color="success"
                    fullWidth
                    placeholder="Address"
                  />
                  <TextField
                    label="Contact"
                    name="cusContact"
                    type="text"
                    color="success"
                    fullWidth
                    placeholder="Contact"
                  />
                  <TextField
                    label="Email"
                    name="cusEmail"
                    type="email"
                    color="success"
                    fullWidth
                    placeholder="Email"
                  />
                  <TextField
                    label="Username"
                    name="cusUsername"
                    type="text"
                    color="success"
                    fullWidth
                    placeholder="Username"
                  />
                  <TextField
                    label="Password"
                    name="cusPassword"
                    type="password"
                    color="success"
                    fullWidth
                    placeholder="Password"
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    color="success"
                    fullWidth
                    placeholder="Confirm Password"
                  />
                  <button className="py-2 bg-green-700 text-white rounded">
                    <h6>Save Customer</h6>
                  </button>
                </form>
              </Box>
            </Fade>
          </Modal>
        </div>
        <section className="w-full">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </div>
    </>
  );
};
function setOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}

export default Customer;
