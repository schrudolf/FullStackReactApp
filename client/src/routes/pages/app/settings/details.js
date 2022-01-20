import { useState, useEffect } from "react";
import { Grid, Container, Button, TextField } from "@mui/material/";
import PageLoading from "../../../../components/ui/pageLoading";
import createNewAxios from "../../../../axios/axios";

import NavLinks from "./navLinks";

import AppHeader from "../../../../components/app/appHeader";
import Footer from "../../../../components/home/footer";

export default function AccountDetails() {
  const [defaultUserDetails, setDefaultUserDetails] = useState({});
  const [userDetails, setUserDetails] = useState({
    details: null,
    isReady: false,
  });
  const [detailsChanged, setdetailsChanged] = useState(false);
  // check default userDetails is equal or not with modified userDetails
  function checkInputData() {
    const [first_name, last_name, country, city, zip_code, address] =
      document.querySelectorAll(
        "#first_name, #last_name, #country, #city, #zip_code, #address"
      );
    // get all input value
    let changedUserDetails = {
      first_name: first_name.value,
      last_name: last_name.value,
      country: country.value,
      city: city.value,
      zip_code: zip_code.value,
      address: address.value,
    };
    const keys1 = Object.keys(defaultUserDetails);
    const keys2 = Object.keys(changedUserDetails);
    if (keys1.length !== keys2.length) {
      return false;
    }
    // if default user details !== actual input value return false
    const buttonStatus = function checkDifferentData() {
      for (let key of keys1) {
        if (defaultUserDetails[key] !== changedUserDetails[key]) {
          return false;
        }
      }
      return true;
    };
    // if true (default user details === actual input values button disabled)
    if (buttonStatus()) {
      setdetailsChanged(false);
    } else {
      setdetailsChanged(true);
    }
  }
  const getUserDetails = async () => {
    const response = await createNewAxios("/app/settings/details", "GET");
    if (response.status === 200) {
      setUserDetails({
        details: response.data,
        isReady: true,
      });
      const [first_name, last_name, country, city, zip_code, address] =
        document.querySelectorAll(
          "#first_name, #last_name, #country, #city, #zip_code, #address"
        );
      first_name.value = response.data.first_name;
      last_name.value = response.data.last_name;
      country.value = response.data.country;
      city.value = response.data.city;
      zip_code.value = response.data.zip_code;
      address.value = response.data.address;
      setDefaultUserDetails({
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        country: response.data.country,
        city: response.data.city,
        zip_code: response.data.zip_code.toString(),
        address: response.data.address,
      });
    }
  };
  async function sendDataToserver(e){
    e.preventDefault();
    const response = await createNewAxios("/app/settings/details", "POST");
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  if (!userDetails.isReady) {
    return (
      <div>
        <AppHeader />
        <PageLoading />;
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <AppHeader />
        <Container maxWidth="lg">
          <Grid container>
            <Grid item textAlign={"left"} xs={12} sm={8}>
              <Container>
                <h1>User Details</h1>
                <form onSubmit={sendDataToserver}>
                <TextField
                  fullWidth
                  onChange={checkInputData}
                  margin="dense"
                  label="First name"
                  placeholder="First name"
                  name="first_name"
                  id="first_name"
                  type="text"
                  required
                />
                <TextField
                  fullWidth
                  onChange={checkInputData}
                  margin="dense"
                  label="Last name"
                  placeholder="Last name"
                  name="last_name"
                  id="last_name"
                  type="text"
                  required
                />
                <TextField
                  fullWidth
                  onChange={checkInputData}
                  margin="dense"
                  label="Country"
                  placeholder="Country"
                  name="country"
                  id="country"
                  type="text"
                  required
                />
                <TextField
                  fullWidth
                  onChange={checkInputData}
                  margin="dense"
                  label="City"
                  placeholder="City"
                  name="city"
                  id="city"
                  type="text"
                  required
                />
                <TextField
                  fullWidth
                  onChange={checkInputData}
                  margin="dense"
                  label="Zip code"
                  placeholder="Zip code"
                  name="zip_code"
                  id="zip_code"
                  type="text"
                  required
                />
                <TextField
                  fullWidth
                  onChange={checkInputData}
                  margin="dense"
                  label="Address"
                  placeholder="Address"
                  name="address"
                  id="address"
                  type="text"
                  required
                />
                {detailsChanged ? (
                  <Button
                    type="submit"
                    size="large"
                    fullWidth
                    variant="contained"
                    color="info"
                  >
                    Save Changes
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    size="large"
                    fullWidth
                    variant="contained"
                    color="info"
                    disabled
                  >
                    Save Changes
                  </Button>
                )}
                </form>
              </Container>
            </Grid>
            <NavLinks />
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
