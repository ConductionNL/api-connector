import Head from "next/head";
import Link from "next/link";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const Welcome = () => (
  <>
    <Head>
      <title>Mijn Demodam</title>
    </Head>


      <Container>
        <Logo/>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              News
            </Typography>
            <Button color="inherit">Login</Button>

            <a href="/docs">
            <Button color="inherit">API</Button>
            </a>
            <Link href="/admin">
              <Button color="inherit">Admin</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Container>
  </>
);
export default Welcome;

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    viewBox="0 0 300 300"
  >
    <style jsx>
      {`
                .logost0 {
                    fill: #ffffff;
                }
                .logost1 {
                    fill: #afe5e5;
                }
                .logost2 {
                    opacity: 0.2;
                    fill: #1d1e1c;
                }
                .logost3 {
                    fill: #1d1e1c;
                }
                .logost4 {
                    fill: #38a9b4;
                }
            `}
    </style>
    <path
      className="logost0"
      d="M35.6 214.6l5.4 4.4c1.6 1.3 2.4 2.4 2.6 4.4v15.7c0 2-1.6 3.6-3.6 3.6 -2 0-3.6-1.6-3.6-3.6v-3.5l-7.2-6.7v10.2c0 2-1.6 3.6-3.6 3.6 -2 0-3.6-1.6-3.6-3.6v-15.7c0.2-2 1.1-3.1 2.6-4.4l5.3-4.4C32 213 33.6 212.9 35.6 214.6zM36.4 228.4v-7.5h-7.2v7.5H36.4z"
    />
    <path
      className="logost0"
      d="M54.4 235.4v3.5c0 2-1.5 3.7-3.5 3.7 -2 0-3.6-1.7-3.6-3.7 0-6.4 0-12.8 0-19.2 0-3.3 2.8-6.1 6.1-6.1 1.9 0 3.5 0 5.5 0 1.7 0 3.1 0.6 4.3 1.7l4 4c2.6 2.5 2.1 8.6-0.4 11l-3.6 3.4c-1.2 1.2-2.6 1.7-4.3 1.7H54.4zM61.3 228.2v-7.4l-6.9-0.1v7.5H61.3z"
    />
    <path
      className="logost0"
      d="M71.3 239.4v-13.3c0-1.8 1.5-3.4 3.6-3.4 2.1 0 3.7 1.5 3.7 3.2v13.5c0 1.8-1.6 3.3-3.7 3.3C72.9 242.7 71.3 241.2 71.3 239.4zM78.5 221h-7v-7.3h7V221z"
    />
    <path
      className="logost0"
      d="M103.8 235.4v3.5c0 2-1.5 3.7-3.5 3.7 -2 0-3.6-1.7-3.6-3.7 0-6.4 0-12.8 0-19.2 0-3.3 2.8-6.1 6.1-6.1 1.9 0 3.5 0 5.5 0 1.7 0 3.1 0.6 4.3 1.7l4 4c2.6 2.5 2.1 8.6-0.4 11l-3.6 3.4c-1.2 1.2-2.6 1.7-4.3 1.7H103.8zM110.8 228.2v-7.4l-6.9-0.1v7.5H110.8z"
    />
    <path
      className="logost0"
      d="M120.4 236.3c0-6.4 0-12.8 0-19.3 0-1.9 1.7-3.6 3.6-3.6 2.1 0 3.7 1.6 3.7 3.6v18.3c3.6 0 2.6-0.1 6.2-0.1 4.8 0 4.8 7.3 0 7.3 -3.3 0-5.2 0-7.2 0C123.2 242.5 120.4 239.7 120.4 236.3z"
    />
    <path
      className="logost0"
      d="M153 214.6l5.4 4.4c1.6 1.3 2.4 2.4 2.6 4.4v15.7c0 2-1.6 3.6-3.6 3.6 -2 0-3.6-1.6-3.6-3.6v-3.5l-7.2-6.7v10.2c0 2-1.6 3.6-3.6 3.6s-3.6-1.6-3.6-3.6v-15.7c0.2-2 1.1-3.1 2.6-4.4l5.3-4.4C149.4 213 150.9 212.9 153 214.6zM153.8 228.4v-7.5h-7.2v7.5H153.8z"
    />
    <path
      className="logost0"
      d="M178.1 213.6c4.7 0 4.7 7.2 0 7.2 -3.6 0 0.5 0-3.1 0 0 6.1 0 12.3 0 18.3 0 4.9-7.2 4.9-7.2 0 0-6 0-12.2 0-18.3 -3.6 0 0.5 0-3.1 0 -4.7 0-4.7-7.2 0-7.2C169.1 213.6 173.6 213.6 178.1 213.6z"
    />
    <path
      className="logost0"
      d="M190.8 220.8c0 1.3 0 3.6 0 4.8 2.7 0 3.8 0 6.5 0 1.9 0 3.6 1.6 3.6 3.6 0 1.9-1.7 3.6-3.7 3.6 -2.6 0-3.7 0-6.4 0 0 2.4 0 3.9 0 6.3 0 4.7-7.2 4.7-7.2 0 0-6.5 0-13 0-19.5 0-3.4 2.7-6.1 6.1-6.1 4 0 5.2 0 9.2 0 2 0 3.6 1.6 3.6 3.6 0 2-1.7 3.7-3.6 3.7H190.8z"
    />
    <path
      className="logost0"
      d="M210.9 213.6h8.3c3.3 0 6.1 2.7 6.1 6.1v16.6c0 3-2.9 6.1-5.9 6.1h-8.6c-3.1 0-6.1-3.1-6.1-6.1v-16.6C204.7 216.2 207.6 213.6 210.9 213.6zM218.1 220.9h-6.2v14.5h6.2V220.9z"
    />
    <path
      className="logost0"
      d="M245.6 230.8c2.6 1.6 3.5 3.6 3.5 6.2v2.1c0 2-1.6 3.6-3.5 3.6 -2 0-3.6-1.7-3.6-3.6v-2l-7.1-8.6c0 4.5 0 6.2 0 10.6 0 2-1.6 3.6-3.6 3.6 -2 0-3.6-1.6-3.6-3.6 0-7.2 0-14.5 0-21.8 0-2 1.6-3.6 3.6-3.6 2.7 0 5.4 0 8.1 0 1.7 0 3.1 0.6 4.3 1.8l3.5 3.4c1.2 1.2 1.9 2.7 1.9 4.5 0 0.5 0 1.1 0 1.6C249.2 227.7 247.9 229.6 245.6 230.8zM234.9 220.8v6.9h7.1c0-2.3 0-4.6 0-6.9H234.9z"
    />
    <path
      className="logost0"
      d="M264.1 214.7l3.1 3.3 3.1-3.3c1.7-1.8 4.2-1.8 5.8 0l4.2 4.4c1.3 1.4 2.4 2.4 2.6 4.4v15.7c0 4.7-7.3 4.7-7.3 0 0-6.1 0-12.2 0-18.3h-4.8c0 6.1 0 12.2 0 18.3 0 4.8-7.2 4.8-7.2 0 0-6.1 0-12.2 0-18.3h-4.8c0 6.1 0 12.2 0 18.3 0 4.7-7.3 4.7-7.3 0v-15.7c0.1-2 1.2-2.9 2.6-4.4l4.2-4.4C260 212.9 262.5 212.9 264.1 214.7z"
    />
    <circle className="logost1" cx="148.5" cy="122.7" r="70.1"/>
    <ellipse className="logost2" cx="131.8" cy="147.2" rx="9.3" ry="2.3"/>
    <ellipse className="logost2" cx="112.5" cy="146.7" rx="9.3" ry="2.3"/>
    <ellipse className="logost2" cx="117.1" cy="160.5" rx="9.3" ry="2.3"/>
    <ellipse className="logost2" cx="99.5" cy="153.9" rx="9.3" ry="2.3"/>
    <polygon
      className="logost3"
      points="121.6 146 119.9 146 119.9 108.6 136.4 117.5 135.6 119 121.6 111.5 "
    />
    <polygon
      className="logost3"
      points="108.7 153.4 107 153.1 111.7 116 136.7 119.7 136.4 121.4 113.2 117.9 "
    />
    <polygon
      className="logost3"
      points="124.5 158.6 123.7 124.9 135.8 121.4 136.3 123.1 125.5 126.2 126.2 158.5 "
    />
    <polygon
      className="logost3"
      points="138 144.5 132.4 127.8 140.3 125.9 140.7 127.5 134.6 129 139.6 143.9 "
    />
    <path
      className="logost3"
      d="M138.1 144.3c0 0-1.6-2.8-4.1-1 -2.5 1.8-1.1 4.2-1.1 4.2s0.8 0.8 3.6 0.8 3.4 0 4-0.6c0.5-0.6-1.2-5.1-1.2-5.1L138.1 144.3z"
    />
    <path
      className="logost3"
      d="M106.2 150.5c0 0-2.6-3.9-6.1-1.4 -3.5 2.5-1.5 5.9-1.5 5.9s1.1 0.8 5 0.8c5 0 4.9-1.5 5.3-2.5 0.6-1.7-1.3-5-1.3-5L106.2 150.5z"
    />
    <path
      className="logost3"
      d="M119.7 144.2c0 0-3.5-4.9-6.9-2.4 -3.5 2.5-1.5 5.9-1.5 5.9s1.1 0.8 5 0.8c5 0 5.3-1 5.6-2 0.6-1.7-1.6-5.5-1.6-5.5L119.7 144.2z"
    />
    <path
      className="logost3"
      d="M124.4 157.5c0 0-3.1-4.8-6.6-2.3 -3.5 2.5-1.5 5.9-1.5 5.9s1.1 1 5 1c5 0 5.1-1.6 5.1-2.7 0.1-5.4-1.8-5-1.8-5L124.4 157.5z"
    />
    <polygon
      className="logost3"
      points="182 146.2 183.7 146.2 183.7 108.8 167.2 117.7 168 119.2 182 111.7 "
    />
    <polygon
      className="logost3"
      points="194.9 153.6 196.6 153.4 191.9 116.2 166.9 120 167.2 121.6 190.4 118.2 "
    />
    <polygon
      className="logost3"
      points="179.1 158.8 179.9 125.2 167.8 121.7 167.3 123.3 178.1 126.4 177.4 158.8 "
    />
    <polygon
      className="logost3"
      points="165.6 144.7 171.2 128 163.3 126.1 162.9 127.8 169 129.2 164 144.1 "
    />
    <path
      className="logost3"
      d="M165.5 144.5c0 0 1.6-2.8 4.1-1 2.5 1.8 1.1 4.2 1.1 4.2s-0.8 0.8-3.6 0.8c-2.8 0.1-3.4 0-4-0.6 -0.5-0.6 1.2-5.1 1.2-5.1L165.5 144.5z"
    />
    <path
      className="logost3"
      d="M197.3 150.7c0 0 2.6-3.9 6.1-1.4 3.5 2.5 1.5 5.9 1.5 5.9s-1.1 0.8-5 0.8c-5 0-4.9-1.5-5.3-2.5 -0.6-1.7 1.3-5 1.3-5L197.3 150.7z"
    />
    <path
      className="logost3"
      d="M183.9 144.5c0 0 3.5-4.9 6.9-2.4 3.5 2.5 1.5 5.9 1.5 5.9s-1.1 0.8-5 0.8c-5 0-5.3-1-5.6-2 -0.6-1.7 1.6-5.5 1.6-5.5L183.9 144.5z"
    />
    <path
      className="logost3"
      d="M179.2 157.7c0 0 3.1-4.8 6.6-2.3 3.5 2.5 1.5 5.9 1.5 5.9s-1.1 1-5 1c-5 0-5.1-1.6-5.1-2.7 -0.1-5.4 1.8-5 1.8-5L179.2 157.7z"
    />
    <path
      className="logost4"
      d="M170.8 115.1c0 10.3-8.2 15.7-18.3 15.7 -10.1 0-17.8-5.4-17.8-15.7s7.7-13.8 17.8-13.8C162.6 101.3 170.8 104.9 170.8 115.1z"
    />
    <path
      className="logost3"
      d="M152.3 131.6c-5.3 0-9.9-1.4-13.2-4.2 -3.5-2.9-5.4-7.2-5.4-12.3 0-9.6 6.4-14.7 18.6-14.7 12.3 0 19.1 5.2 19.1 14.7 0 5.1-2 9.4-5.7 12.4C162.3 130.2 157.6 131.6 152.3 131.6zM152.3 102.2c-11.2 0-16.9 4.4-16.9 13 0 9.2 6.5 14.8 16.9 14.8 10.6 0 17.4-5.8 17.4-14.8C169.7 104.4 160.2 102.2 152.3 102.2z"
    />
    <ellipse
      className="logost0"
      cx="145.6"
      cy="104.2"
      rx="11.4"
      ry="11.8"
    />
    <path
      className="logost3"
      d="M145.4 116.6c-6.6 0-12-5.5-12-12.4 0-6.8 5.4-12.4 12-12.4 6.6 0 12 5.5 12 12.4C157.4 111 152 116.6 145.4 116.6zM145.4 93c-6 0-10.8 5-10.8 11.2 0 6.2 4.8 11.2 10.8 11.2s10.8-5 10.8-11.2C156.2 98.1 151.3 93 145.4 93z"
    />
    <ellipse className="logost0" cx="162.6" cy="106.1" rx="9.4" ry="9.2"/>
    <path
      className="logost3"
      d="M162.4 116c-5.5 0-10-4.4-10-9.8 0-5.4 4.5-9.8 10-9.8s10 4.4 10 9.8C172.4 111.6 167.9 116 162.4 116zM162.4 97.5c-4.9 0-8.8 3.9-8.8 8.6 0 4.8 3.9 8.6 8.8 8.6 4.9 0 8.8-3.9 8.8-8.6C171.2 101.4 167.2 97.5 162.4 97.5z"
    />
    <circle className="logost3" cx="146.3" cy="104.8" r="5.2"/>
    <circle className="logost0" cx="149.2" cy={104} r="1.4"/>
    <ellipse className="logost3" cx="163.4" cy="106.7" rx="4.3" ry="4.1"/>
    <circle className="logost0" cx="162.5" cy={106} r="1.2"/>
    <ellipse className="logost2" cx={172} cy="147.5" rx="9.3" ry="2.3"/>
    <ellipse className="logost2" cx="191.2" cy={147} rx="9.3" ry="2.3"/>
    <ellipse className="logost2" cx="186.6" cy="160.8" rx="9.3" ry="2.3"/>
    <ellipse className="logost2" cx="204.3" cy="154.2" rx="9.3" ry="2.3"/>
  </svg>
);


