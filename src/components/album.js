import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from "axios";
import {useState, useEffect} from 'react';



export default function Album() {

  const [albums ,setAlbums]= useState([]);

  const fetchAlbums = async()=>{
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(res.data);

    }catch(e){
      console.log(e);
    }
    
  };

  useEffect( ()=>{
    fetchAlbums();

  },[]);

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'powderblue' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {albums.length === 0? (
          <ListItem>
            <ListItemText No albums present />
          </ListItem>):(albums.map(album=>(
             <ListItem key={album.id}>
             <ListItemButton>
              <ListItemText primary={album.title} />
             </ListItemButton>
            </ListItem>

          ))
         
          )
         
          }
        </List>
      </nav>
    </Box>
    );
  }
