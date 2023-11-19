import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function DeliveryAddressForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      phone: data.get("phone"),
      email: data.get("email"),
    };
    toast.success("Điền thông tin thành công");
    console.log("address", address);
  };
  return (
    <div>
      <ToastContainer />
      <Grid container spacing={4} className="delivery-main">
        <Grid xs={12} lg={5} className="delivery">
          <div className="delivery-btn">
            <AddressCard />
            <Button
              sx={{ mt: 2 }}
              className="mt-30"
              text="Deliver Here"
            ></Button>
          </div>
        </Grid>
        <Grid xs={12} lg={7}>
          <Box className="delivery-box">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" text="Deliver Here"></Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
