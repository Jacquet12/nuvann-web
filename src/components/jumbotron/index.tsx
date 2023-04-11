import { Avatar } from '@mui/material';
import React from 'react'

import './styles.scss'
import Title from '../Title';

interface jumbArray  {
  title: string,
  appearence: string
}

interface JumbotronProps {
  data: jumbArray[];
}

const Jumbotron: React.FC <JumbotronProps>  = ({data}) => {
  return (
    <div className="home_jumbotron">
      <Title title="Kategori" />
      {data?.map((jumb:jumbArray, index:number) => (
        <div className="jumbotron_content" key={jumb.title + index}>
          <Avatar alt="Remy Sharp" src={jumb.appearence} sx={{ width: 70, height: 70 }}/>
          <h3>{jumb.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Jumbotron;