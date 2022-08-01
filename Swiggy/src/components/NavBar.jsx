import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { SignInSide } from "./login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SellIcon from "@mui/icons-material/Sell";
import SupportIcon from "@mui/icons-material/Support";
import LoginDrawer from "./Login/Login";

const pages = ["Location", "Products", "Cart"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigator = () => {};
  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" color="primary" sx={{ height: "70px" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 1, display: { xs: "none", md: "flex" } }}
            >
              <img
                onClick={() => navigate("/")}
                src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
                height="40px"
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Button
                  key={"Location"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Location
                </Button>

                <Button
                  key={"Products"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Product
                </Button>
                <Button
                  key={"Cart"}
                  onClick={() => {
                    handleCloseNavMenu();
                    return navigate("/cart");
                  }}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Cart
                </Button>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                alignItems: "center",
                display: { xs: "flex", md: "none" },
              }}
            >
              <img
                src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
                height="40px"
              />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              <select style={{ width: "30%", height: "50px", border: 0 }}>
                <option>Select your Location</option>
                <option value="">Indore</option>
                <option value="">Pune</option>
                <option value="">Hyderabad</option>
                <option value="">Delhi</option>
                <option value="">Banglore</option>
              </select>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  p: 0,
                  m: 1,
                  //   width: "400px",
                  //   justifyContent: "flex-end",
                  bgcolor: "background.paper",
                  borderRadius: 1,

                  width: "70%",
                  height: "50px",
                  justifyContent: "space-around",
                  marginLeft: "20%",
                }}
              >
                {" "}
                <Link to={"/search"}>
                  <Button
                    sx={{ my: 0, color: "black", display: "block", mt: 1 }}
                  >
                    <AiOutlineSearch />
                    Search
                  </Button>
                </Link>
                <Button
                  onClick={() => handleCloseNavMenu()}
                  sx={{ my: 0, color: "black", display: "block" }}
                >
                  <SupportIcon />
                  Help
                </Button>
                <Link to={"/offers"}>
                  {" "}
                  <Button
                    sx={{
                      my: 0,
                      color: "black",
                      display: "block",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <SellIcon />
                    Offers
                  </Button>
                </Link>
                <Button
                  key={"Cart"}
                  onClick={() => {
                    handleCloseNavMenu();
                    return navigate("/cart");
                  }}
                  sx={{ my: 0, color: "black", display: "block" }}
                >
                  <ShoppingBagIcon /> Cart
                </Button>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <Link to={'/'}> */}
              <LoginDrawer />
              {/* <Tooltip title="Login" >

                                <IconButton onClick={() => navigate("/login")} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip> */}
              {/* </Link> */}
              {/* <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
// import { ThemeProvider, createTheme } from "@mui/material/styles";
