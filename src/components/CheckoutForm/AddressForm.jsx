import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import {Link} from 'react-router-dom'
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../Lib/Commerce";
const AddressForm = ({ checkOutToken, next }) => {
  const methods = useForm();
  const [shippingCountries, setshippingCountries] = useState([]);
  const [shippingCountry, setshippingCountry] = useState("");
  const [shippingSubdivisions, setshippingSubdivisions] = useState([]);
  const [shippingSubdivision, setshippingSubdivision] = useState("");
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState("");

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    
    setshippingCountries(countries);
    setshippingCountry(Object.keys(countries)[0])
  
  };

  useEffect(() => {
    fetchShippingCountries(checkOutToken.id);
    
  }, []);
  // is called whenever the country is changed
  useEffect(() =>{
     if(shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry])

  useEffect(() =>{
      if(shippingSubdivision) fetchShippingOptions(checkOutToken.id, shippingCountry, shippingSubdivision)
  },[shippingSubdivision])

  const countries = Object.entries(shippingCountries).map(([code, name]) =>({id:code, label:name}))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) =>({id:code, label:name}))
  const options = shippingOptions.map((sO) =>({id:sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))

  const fetchSubdivisions = async (countryCode) =>{
      const{subdivisions} = await commerce.services.localeListSubdivisions(countryCode)

      setshippingSubdivisions(subdivisions)   
      setshippingSubdivision(Object.keys(subdivisions)[0])     

  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) =>{
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})
    setshippingOptions(options)
    setshippingOption(options[0].id)

  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision, shippingOptions}))}>
          <Grid container spacing={3}>
            <CustomTextField  name="firstName" label="First Name" />
            <CustomTextField  name="lastName" label="Last Name" />
            <CustomTextField  name="address1" label="Address" />
            <CustomTextField  name="email" label="Email" />
            <CustomTextField  name="city" label="City" />
            <CustomTextField  name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setshippingCountry(e.target.value)}>
                {countries.map((country)=>(
                  <MenuItem key={country.id} value={country.id}>
                  {country.label}
                </MenuItem>
                ))}
                
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping SubDivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setshippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision)=>(
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                  {subdivision.label}
                </MenuItem>
                ))}
                
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e)=> setshippingOption(e.target.value)}>
                {options.map((option) =>(
                  <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
                ))}
                
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{display:'flex', justifyContent:'space-between'}}>
                  <Button component={Link} to='/Cart' variant='outlined'>
                    Back to Cart
                  </Button>
                  <Button type='submit' color='primary' variant='contained'>
                      Next
                  </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
